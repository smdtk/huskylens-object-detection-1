/**
 * huskylens OBJECT_RECOGNITION
 * 
 * 1. Add Huskylens 
 * 
 * Extensions >  Huskylens
 * 
 * 2. OBJECT_RECOGNITION
 * 
 * huskylens.forgetLearn()
 */
let isObjectDetected = false
// Initialize HuskyLens
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
huskylens.forgetLearn()
basic.forever(function () {
    // Request data from HuskyLens
    huskylens.request()
    // Check if the frame is detected
    isObjectDetected = huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)
    if (isObjectDetected) {
        // Show an icon if an object is detected
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
    } else {
        // Clear the screen if no object is detected
        basic.clearScreen()
        basic.pause(100)
    }
})
