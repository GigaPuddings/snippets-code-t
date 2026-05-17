fn main() {
    println!("cargo:rerun-if-env-changed=VITE_OFFICIAL_PLUGINS_MODE");
    println!("cargo:rerun-if-env-changed=SNIPPETS_OFFICIAL_PLUGINS_MODE");

    let mode = std::env::var("SNIPPETS_OFFICIAL_PLUGINS_MODE")
        .or_else(|_| std::env::var("VITE_OFFICIAL_PLUGINS_MODE"))
        .unwrap_or_else(|_| "external".to_string());

    if mode == "bundled" {
        println!("cargo:rustc-env=SNIPPETS_OFFICIAL_PLUGINS_MODE=bundled");
    } else {
        println!("cargo:rustc-env=SNIPPETS_OFFICIAL_PLUGINS_MODE=external");
    }

    tauri_build::build()
}
