input.onButtonPressed(Button.A, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
})
input.onButtonPressed(Button.AB, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    mbit_Robot.Music_Car(mbit_Robot.enMusic.dadadum)
})
input.onButtonPressed(Button.B, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
})
