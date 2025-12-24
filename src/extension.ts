// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const commandID = `habits.helloWorld`;
const activationMesagge = `Habits: code session initialized`;
let statusBar: vscode.StatusBarItem; 

vscode.window.showInformationMessage(activationMesagge);

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {
	
	const HabitsStatus = vscode.commands.registerCommand(`habits.status`, () =>{
		vscode.window.showInformationMessage(`Habits: OK`);
	});
    context.subscriptions.push(HabitsStatus);
	statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
	statusBar.command = commandID;  
    statusBar.text = `amongos`;

	startTimer(statusBar);
	
	


}


 function startTimer(statusBar: vscode.StatusBarItem) {
		
		let timer: ReturnType<typeof setInterval> | undefined;
		let seconds = 0;
		let minutes = 0;
		let hours = 0;
		
		statusBar.text = `Session: ${hours}h ${minutes}m`;
		statusBar.show();

		if (!timer) {
            timer = setInterval(() => {
                seconds++;
                console.log(`has been ${seconds} since the extension was up`); //TODO remove debug log
                if (seconds === 60) { //TODO refactorice for more legible code (use negations)
                    seconds = 0;
					minutes++;
					updateStatusBar(hours , minutes);
					StandRight(minutes);
					DrinkWater(minutes);
					if(minutes === 60){

						leaveTheChair();
						minutes = 0;
						hours++;
						
					}

                }
            }, 1000);
        }
		function updateStatusBar(hours:Number, minutes:Number): void{
		statusBar.text = `Session: ${hours}h ${minutes}m`;
}

function DrinkWater(minutes:Number): void{
	if(minutes !== 30){
		return;
	}
	else{
		
		vscode.window.showInformationMessage(`You better take a sip!`);

	}
}

function leaveTheChair(): void{
	vscode.window.showInformationMessage(`Leave the chair and take a little walk`);
}

function StandRight(minutes:Number): void{
	if(minutes !== 45){
		return;
	}
	else{
		vscode.window.showInformationMessage(`Hey!, take care of that back or you'll be sore\n Righten that back and do some stretches`);
	}
	
	}

}

export function deactivate() {}
