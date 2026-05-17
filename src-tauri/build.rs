fn main() {
    println!("cargo:rerun-if-env-changed=VITE_OFFICIAL_PLUGINS_MODE");

    if std::env::var("VITE_OFFICIAL_PLUGINS_MODE").as_deref() == Ok("external") {
        println!("cargo:rustc-env=SNIPPETS_OFFICIAL_PLUGINS_MODE=external");
    }

    tauri_build::build()
}
