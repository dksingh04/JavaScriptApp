function secretArchivesLock(lock, actions) {
    var rows = lock.length;
    var cols = lock[0].length;
    var splittedData = [];
    for (var act of actions){
        splittedData = [];
        lock.forEach(function(item, index) {
            if(act == 'L' || act=='R'){
                var Chars='';
                var dotsVal='';
                for(var ky of item){
                    if(ky != '.'){
                        Chars += ky;
                    }else{
                        dotsVal += '.';
                    }
                }
                
                if(act == 'L'){
                    lock[index]=Chars+dotsVal;
                }else{
                    lock[index]=dotsVal+Chars;
                }
                
            }else if(act == 'U' || act=='D'){
                splittedData.push(item.split(''));
                if(index == rows-1){
                    var Chars='';
                    var dotsVal='';
                    var shifftedVal="";
                    for(var c=0; c<cols; c++){
                        Chars='';
                        dotsVal='';
                        for(var r=0; r<rows; r++){
                            if(splittedData[r][c] !='.'){
                                Chars+=splittedData[r][c];
                            }else{
                                dotsVal+=splittedData[r][c];
                            }
                        }
                        shifftedVal="";
                        if(act == 'U'){
                            shifftedVal = Chars+dotsVal;
                        }else{
                            shifftedVal = dotsVal+Chars;
                        }

                        for(var iShiftted=0; iShiftted<shifftedVal.length; iShiftted++){
                            splittedData[iShiftted][c]=shifftedVal.charAt(iShiftted);
                        }

                    }

                    lock.forEach(function(item, index) {
                        lock[index] = splittedData[index].join('');
                    });
                }
               
            }
          
        });
        
    }
    
    
    return lock;
}
