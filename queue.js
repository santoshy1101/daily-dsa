

let queue=[]
queueSize = queue.length;
maxQueue = 5;

function enqueue(newVal){
    if(queueSize>=maxQueue){
        console.log("queue is full")
    }else{
        queue[queueSize] = newVal;
        queueSize++;
    }
}

function dequeue(){
    if(queueSize>0){
        for(let i=0; i<queue.length; i++){
            queue[i]= queue[i+1]
        }
        queueSize--;
        queue.length = queueSize;
    }
    else{
        console.log("queue is already empty")
    }

    
}

function display(){
    console.log(queue)
}

enqueue(3);
enqueue(39);
enqueue(32);

display()
