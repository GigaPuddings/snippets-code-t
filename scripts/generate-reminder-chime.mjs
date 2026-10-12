// Original, quiet three-note reminder chime; no external audio or dependencies.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const sampleRate = 24000;
const duration = 0.8;
const frames = Math.round(sampleRate * duration);
const buffer = Buffer.alloc(44 + frames * 2);
buffer.write('RIFF');
buffer.writeUInt32LE(buffer.length - 8, 4);
buffer.write('WAVEfmt ', 8);
buffer.writeUInt32LE(16, 16);
buffer.writeUInt16LE(1, 20);
buffer.writeUInt16LE(1, 22);
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(sampleRate * 2, 28);
buffer.writeUInt16LE(2, 32);
buffer.writeUInt16LE(16, 34);
buffer.write('data', 36);
buffer.writeUInt32LE(frames * 2, 40);
const notes = [
  [0, 659.25],
  [0.16, 830.61],
  [0.32, 987.77]
];
for (let frame = 0; frame < frames; frame += 1) {
  const time = frame / sampleRate;
  let value = 0;
  for (const [start, frequency] of notes) {
    const age = time - start;
    if (age < 0 || age > 0.48) continue;
    const envelope =
      Math.min(1, age / 0.012) *
      Math.exp(-age * 9) *
      Math.min(1, (0.48 - age) / 0.035);
    value +=
      0.13 *
      envelope *
      (Math.sin(2 * Math.PI * frequency * age) +
        0.18 * Math.sin(4 * Math.PI * frequency * age));
  }
  buffer.writeInt16LE(
    Math.round(Math.max(-1, Math.min(1, value)) * 32767),
    44 + frame * 2
  );
}
const target = new URL(
  '../src-tauri/resources/todo/reminder-chime.wav',
  import.meta.url
);
mkdirSync(fileURLToPath(new URL('.', target)), { recursive: true });
writeFileSync(target, buffer);
console.log(`Reminder chime: ${frames} samples, ${buffer.length} bytes`);
