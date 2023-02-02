import { crew, pirates } from '../setup/initialData.js'

// set both pirates and crew to keep ids updated
function setLocalStorage() {
    localStorage.setItem('pirates', JSON.stringify(pirates));
    localStorage.setItem('crew', JSON.stringify(crew));
}

// simulate API responses
export const api = {            
    getPirates: function() {
        const pirateData = JSON.parse(localStorage.getItem('pirates'));
        if (!pirateData) {
            setLocalStorage();
            return pirates;
        }
        return pirateData;
    },

    getCrew: function() {
        const crewData = JSON.parse(localStorage.getItem('crew'));
        if (!crewData) {
            setLocalStorage()
            return crew;
        }
        return crewData;
    },

    update: function(type, data) {
        localStorage.setItem(type, JSON.stringify(data));
    },

    addCrew: function(crew) {
        const crewList = this.getCrew();
        // avoid duplicated name
        if(crewList.find(item => item.name.toLowerCase() === crew.name.toLowerCase())) {
            return crewList; 
        }
        const data = [...crewList, crew];
        localStorage.setItem('crew', JSON.stringify(data));
        return data;
    }, 

    deletePirate: function(pirate) {
        const data = this.getPirates().filter(member => member.id !== pirate.id);
        localStorage.setItem('pirates', JSON.stringify(data));
        return data;
    }
}

