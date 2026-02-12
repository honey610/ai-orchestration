let sessionStore=[];

export function saveVersion(versiionData) {
    const version={
        id: Date.now().toString(),
        timestamp: new Date(),
        ...versiionData
    };
    sessionStore.push(version);
    return version;
}

// export function getVersions(){
//     return sessionStore;
// }
    

export function getVersionById(id) {
  return sessionStore.find(v => v.id === id);
}

export function getHistory() {
  return sessionStore;
}


export function clearHistory() {
  sessionStore = [];
}