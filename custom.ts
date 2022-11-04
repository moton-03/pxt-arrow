//% color="#576b00" icon="\uf245"
namespace arrow {
    //% block="Show Arrow %angle"
    //% angle.min=0 angle.max=359
    export function showArrow(angle: number): void {
        if (angle < 45) {
            basic.showArrow(ArrowNames.North)
        }
        else if (angle < 90) {
            basic.showArrow(ArrowNames.NorthEast)
        }
        else if (angle < 135) {
            basic.showArrow(ArrowNames.East)
        }
        else if (angle < 180) {
            basic.showArrow(ArrowNames.SouthEast)
        }
        else if (angle < 225) {
            basic.showArrow(ArrowNames.South)
        }
        else if (angle < 270) {
            basic.showArrow(ArrowNames.SouthWest)
        }
        else if (angle < 315) {
            basic.showArrow(ArrowNames.West)
        }
        else {
            basic.showArrow(ArrowNames.NorthWest)
        }
    }
}