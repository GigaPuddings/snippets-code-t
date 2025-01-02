import Database from "@tauri-apps/plugin-sql"

let dbInstance: Database | null = null
export const getDb = async () => {
  if (!dbInstance) {
    dbInstance = await Database.load('sqlite:code.db')
  }
  return dbInstance
}
