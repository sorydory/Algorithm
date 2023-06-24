function solution(cards1, cards2, goal) {
    var answer = '';
    return answer;
}

function solution(cards1,cards2,goal){
    for(const cardleng of goal){
        if(cards1[0]==cardleng){
            cards1.shift();
        }else if(cards2[0]==cardleng){
            cards2.shift();
        }else{
            return "No";
        }
    }
    return "Yes";
}