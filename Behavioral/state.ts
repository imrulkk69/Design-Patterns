

function TrafficLightFunc(state: string){

    switch(state){
        case 'red':
            console.log('Stop');
            break;
        case 'yellow':
            console.log('Start');
            break;
        case 'greeen':
            console.log('Go');
            break;
        default:
            console.log('halt - state is unrecognized.')
    }
}

//TrafficLightFunc('greeen')

//Above can be achieveable by state pattern which will make 
// the code future-proof and new state can be added any time 
// Below code is the State Design Pattern ( slightly modified by myself to make it more dynamic)


interface TrafficLightState {
  name: string;
  logAction(): void;
}

class RedState implements TrafficLightState {

    public name: string;
    constructor(){
        this.name = 'red';
    }

  logAction() {
    console.log('Stop');
  }
}

class YellowState implements TrafficLightState {

    public name: string;
    constructor(){
        this.name = 'yellow';
    }

  logAction() {
    console.log('Start');
  }
}

class GreenState implements TrafficLightState {

    public name: string;
    constructor(){
        this.name = 'green';
    }

    logAction() {
        console.log('Go');
    }
}

class DefaultState implements TrafficLightState{

    public name: string;
    constructor(){
        this.name = 'default'
    }

    logAction() {
        console.log('halt - state is unrecognized.')
    }
}


class TrafficLight {

  private currentState: TrafficLightState = new DefaultState();   
  public allStates: Array<TrafficLightState> = [];

  addState(state: TrafficLightState): void {
    this.allStates = [...this.allStates, state]
  }

  setState(name: string) {
    /*
    * To make selection more dynamic without the help of name property in each State Class
    * We can use Class Name. In JS to get class name use <InstanceOfClass>.constructor.name 
    * So, we can refactor following line like below,
    * const state = this.allStates.find(state => state.constructor.name === name)
    */
    const state: TrafficLightState | undefined = this.allStates.find(state => state.name === name) 

    if(state){
       this.currentState = state 
    }
  }

  action() {
    this.currentState.logAction();
  }
}


const trafficLight = new TrafficLight();

trafficLight.addState(new RedState());
trafficLight.addState(new YellowState());
trafficLight.addState(new GreenState());

trafficLight.setState('green')

trafficLight.action(); 






  