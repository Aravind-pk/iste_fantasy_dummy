let players=[
    {
        name:'kholi',
        skill:'batsman',
        credit:10,
        team:'rcb'
    },
    {
        name:'dhoni',
        skill:'batsman',
        credit:20,
        team:'csk'
    },
    {
        name:'chahal',
        skill:'bowler',
        credit:30,
        team:'rcb'
    },
    {
        name:'gale',
        skill:'batsman',
        credit:30,
        team:'KX11'
    },
    {
        name:'ABD',
        skill:'batsman',
        credit:30,
        team:'rcb'
    },
    {
        name:'morris',
        skill:'bowler',
        credit:30,
        team:'rcb'
    }

];
let myTeam =[];
const totalCredit =50;
let remainingCredit = totalCredit;
let usedCredit =0;



const setMyteam =()=>{

    playersList = myTeam.reduce((playerhtml, player) => {

        console.log(player.skill)

        playerhtml += `<li>${player.name}
                        <a>${player.credit}</a>
                        <a>${player.team}</a>
                        <button id = ${player.name} onClick ="removePlayer(event.srcElement.id)" >remove</button>
                        </li>`;    
        return playerhtml;
    
      }, ''); 

    playersElement = document.getElementById("myTeam");
    playersElement.innerHTML = playersList;
}

const setPlayers =()=>{

    playersList = players.reduce((playerhtml, player) => {

        playerhtml += `<li>${player.name}
                        <a>${player.credit}</a>
                        <a>${player.team}</a>
                        <button id = ${player.name}  onClick ="addPlayer(event.srcElement.id)" >choose</button>
                        </li>`;    
        return playerhtml;
    
      }, ''); 

    playersElement = document.getElementById("players");
    playersElement.innerHTML = playersList;
}


const addPlayer =(name) =>{
    console.log(name);
    newPlayer = players.find(player => player.name === name);

    if(remainingCredit >= newPlayer.credit){

        index = players.findIndex(player => player.name === name);
    
        myTeam.push(newPlayer);
    
        if (index > -1) {
            players.splice(index, 1);
          }
        setMyteam();
        setPlayers();
        useCredit(newPlayer);

    }else{alert("inssufficient credits")}


}
const removePlayer =(name) =>{
    console.log(name);
    newPlayer = myTeam.find(player => player.name === name);
    index = myTeam.findIndex(player => player.name === name);
    players.push(newPlayer);
    if (index > -1) {
        myTeam.splice(index, 1);
      }
    setMyteam();
    setPlayers();
    getCredit(newPlayer);
}

const useCredit =(player) =>{
    remainingCredit -= player.credit;
    usedCredit += player.credit;
    updateCredit();
}
const getCredit =(player) =>{
    remainingCredit += player.credit;
    usedCredit -= player.credit;
    updateCredit();
}

const updateCredit= ()=>{
    
    rCreditHtml=`<div> remaining credit :${remainingCredit}</div>`;
    uCreditHtml=`<div> used credit :${usedCredit}</div>`;

    rCreditElement = document.getElementById("remainingCredit");
    rCreditElement.innerHTML =rCreditHtml;

    uCreditElement = document.getElementById("usedCredit");
    uCreditElement.innerHTML =uCreditHtml;
}


setMyteam();
setPlayers();
updateCredit();