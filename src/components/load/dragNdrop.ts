import { ref, onUnmounted } from "@vue/runtime-core";
import { setData } from "../../server/api";
export function useDragnDrop(courtItem, selectedItem, courtsArray, info, loaderFlag, infoflag){

    let x = ref(0);
    let y = ref(0);
    let count = {};
    let categoryCount = {};
    function onMouseDown(event){
        x.value = event.pageX;
        y.value = event.pageY;
        courtItem.value.forEach(item => {
            if(event.target == item){
                function onMouseMove(event){
                    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
                   // @ts-ignore
                    let droppableBelow = elemBelow.closest('.loader__wrapper');
                    if(droppableBelow){
                        infoflag.value = false;
                        loaderFlag.value = true;
                        selectedItem.value = {};
                        item.style.color = "blueviolet";
                        item.style.backgroundColor = "#42b983";
                        selectedItem.value.name = item.textContent;
                        courtsArray.value.forEach(court => {
                            if(selectedItem.value.name == court.name){
                                selectedItem.value.routing = court.routing;
                                selectedItem.value.url = court.url;
                            }
                        })
                    }
                    if(droppableBelow == null){
                        item.style.color = "#42b983";
                        item.style.backgroundColor = "blueviolet";
                    }
                    x.value = event.pageX;
                    y.value = event.pageY;
                    item.style.left = x.value + 'px';
                    item.style.top = y.value + 'px';
                    document.addEventListener("mouseup", onMouseUp);
                }
                function onMouseUp(event){
                    item.style.position = "static";
                    setData(selectedItem.value.routing, selectedItem.value.url).then(data => {
                        if(data.category){
                            infoflag.value = true;
                            info.value.category = data.category.length-1;
                            data.judge.shift();
                            data.judge.forEach(el => {
                                count[el] = (count[el] || 0) + 1;
                            });
                            data.category.forEach(el => {
                                categoryCount[el] = (categoryCount[el] || 0) + 1
                            });
                            let maxCount = [];
                            let maxJudge = "";
                            maxCount = Object.values(count);
                                               // @ts-ignore
                            maxCount = Math.max(...maxCount);
                            for(let el in count){
                                if(count[el] == maxCount){
                                    maxJudge = el;
                                }
                            }
                            info.value.maxJudge = maxJudge;
                            info.value.maxCount = maxCount;
                            loaderFlag.value = false;
                        }

                    });
              
                    item.style.color = "#42b983";
                    item.style.backgroundColor = "blueviolet";
                    document.removeEventListener('mousemove', onMouseMove);

                }
                item.style.position = "absolute";
                document.addEventListener("mousemove", onMouseMove);

            }
        });

    }
  
    document.addEventListener("mousedown", onMouseDown);
    onUnmounted(()=> {
        document.removeEventListener("mousedown", onMouseDown);
    });
    return {x, y}
}
