Pyramid(10,1);
//80/100 to4ki
function Pyramid(base,increment)
{
    let stone=0;
    let marble=0;
    let lapis=0;
    let gold=0;
    let height=0;
    for(base;base>0;base-=2){
        let radius=1;
        let area=1
        let stoneArea=1;
        if(base>1)
            radius=(base-1)*4
        if(base>1)
            stoneArea=(base*base)-radius
        if(base>1)
            area=radius+stoneArea
        height++;
        if(base-2>0){
            if(height%5==0){
                lapis+=radius*increment
            }else
                marble+=radius*increment;
            stone+=stoneArea*increment;
        }else{
            gold+=area*increment;
            break;
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(height*increment)}`)

}