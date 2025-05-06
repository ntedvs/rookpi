use std::process::Command;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
fn start(white_path: &str, black_path: &str) {
    let white = Command::new(white_path).spawn().unwrap();
    let black = Command::new(black_path).spawn().unwrap();
}

pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, start])
        .run(tauri::generate_context!())
        .expect("Error while running Tauri");
}
