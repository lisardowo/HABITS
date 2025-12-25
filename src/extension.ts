
import * as vscode from 'vscode';

const activationMesagge = `Habits: code session initialized`;
let statusBar: vscode.StatusBarItem; 

vscode.window.showInformationMessage(activationMesagge);


export function activate(context: vscode.ExtensionContext) {
	

	statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
	const HabitsStatus = vscode.commands.registerCommand(`habits.status`, () =>{
		vscode.window.showInformationMessage(`Habits: OK`);
	});

    context.subscriptions.push(HabitsStatus);
	
	startTimer(statusBar);

}


 function startTimer(statusBar: vscode.StatusBarItem) {
		
		let sessionMinutes = 0;
		let sessionHours = 0;
		
		const updateTimer = () => {
        sessionMinutes++;

        if (sessionMinutes === 60) {
            sessionMinutes = 0;
            sessionHours++;
        }

        updateStatusBar(sessionHours, sessionMinutes);
        handleReminders(sessionMinutes);
    };

    
    updateStatusBar(sessionHours, sessionMinutes);
    statusBar.show();

    setInterval(updateTimer, 60000);


		
}
function handleReminders(minutes:number):void{
		if(minutes === 0){
			leaveTheChair();
		}
		if(minutes === 30){
			DrinkWater();
		}
		if(minutes === 45){
			StandRight();
		}
}
function updateStatusBar(hours:Number, minutes:Number): void{
		statusBar.text = `Session: ${hours}h ${minutes}m`;
}

function DrinkWater(): void{
	
		vscode.window.showInformationMessage(`You better take a sip!`);

}

function leaveTheChair(): void{
	vscode.window.showInformationMessage(`Leave the chair and take a little walk`);
}

function StandRight(): void{
	
		vscode.window.showInformationMessage(`Hey!, take care of that back or you'll be sore\n Righten that back and do some stretches`);
	
	
}



export function deactivate() {}
