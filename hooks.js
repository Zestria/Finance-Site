export const defineSide = (str, anotherTxt="", classStr="") => {
    let s = str +"";
    let trigger = 'growth';
    if (s.search('-')!==-1) trigger='fall';

    if(s.search('.')===-1) return <p className={trigger}>{s}</p>;

    return <p className={trigger + ' ' + classStr}>{trigger==='growth' ? '+' + Number(s).toFixed(2) : Number(s).toFixed(2)}{anotherTxt}</p>;

}

export const cuttingNum = num => {
    let s = num + '';
    s = s.split('').reverse().join('');
    let arr = [];
    for(let i = 0; i < s.length; i+=3) {
        arr.push(s.slice(i, i+3));
    }

    s = (arr.join().split('').reverse().join(''));
    if([...s.matchAll(',')].length===1) return (s.slice(0, s.length-1) + 'K');

    if([...s.matchAll(',')].length===2) return (s.slice(0, s.length-5) + 'M');

    if([...s.matchAll(',')].length===3) return (s.slice(0, s.length-9) + 'B'); 

    if([...s.matchAll(',')].length===4) return (s.slice(0, s.length-13) + 'T'); 
    
    return s;
}