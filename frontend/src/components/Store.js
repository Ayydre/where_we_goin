import {makeObservable, observable} from 'mobx';

class Store {
  user = null;
  lobby = null;
  constructor(){
    makeObservable(this, {user: observable, lobby: observable})
  }
}

export default new Store();
