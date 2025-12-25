# Habits VS Code Extension
[Habits Extension Demo](images/demo.gif)
## Description

`Habits` is a Visual Studio Code extension designed to help you maintain healthy coding habits. It keeps track of your coding session duration and provides timely reminders to take care of your well-being. Long coding sessions can be detrimental to your health, and this extension aims to mitigate the risks by encouraging you to take regular breaks, stay hydrated, and maintain a good posture.

## Features

- **Session Timer**: A status bar item displays the duration of your current coding session, showing hours and minutes.
- **Drink Water Reminder**: Every 30 minutes, the extension will remind you to drink water, helping you stay hydrated.
- **Posture Check**: At the 45-minute mark of every hour, you'll receive a notification to check your posture and do some stretches, preventing back pain and discomfort.
- **Take a Break**: After a full hour of coding, the extension will prompt you to leave your chair and take a short walk, promoting circulation and reducing the strain of prolonged sitting.
- **Status Check**: A command to check if the extension is running correctly.

## Commands

- `Habits: Status`: Shows a notification confirming that the extension is active and running.

## Usage

Once installed, the `Habits` extension will start automatically. You will see a new item in the status bar at the bottom-left of your VS Code window, displaying your session time. The reminders will pop up as information messages at the specified intervals.

## Installation

1. Open **Visual Studio Code**.
2. Go to the **Extensions** view by clicking on the square icon in the sidebar or pressing `Ctrl+Shift+X`.
3. Search for `Habits`.
4. Click **Install** on the extension published by **lichango**.
5. The extension will be activated automatically.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue on the GitHub repository. If you want to contribute with code, please fork the repository and submit a pull request.

### Setting up for Development

1. Clone the repository.
2. Navigate to the project directory:
   ```bash
   cd habits
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Open the project in VS Code:
   ```bash
   code .
   ```
5. Press `F5` to open a new VS Code window with the extension running for debugging.

## License

This project is licensed under the MIT License.
