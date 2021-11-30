var a = 0;
var criteria = ['The substance is often taken in larger amounts, or over a longer period than it was intended.', 'There is a persistent desire or unsuccessful efforts to cut down or control use of the substance.', 'A great deal of time is spent in activities necessary to obtain the substance, use the substance or recover from its effects.', 'Cravings for the substance', 'Recurrent use of the substance resulting in a failure to fulfill major role obligations at work, school, or home', 'Continued use of the substance despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of its use', 'Important social, occupational, or recreational activities are given up or reduced because of the substance.', 'Recurrent use of a substance in situations when it is physically hazardous', 'Continued substance use despite having physical or psychological problems that is likely to be caused by that substance', 'Tolerance, where 1) consuming the same amount of the substance leads to diminshed happiness, or 2) when more of the substance is needed to achieve the same level of euphoria', 'Withdrawal, where a closely related substance is taken to avoid withdrawal symptoms.*'];

function createCriteria(){
    for(var i = 0; i < criteria.length; i++){
        var d = document.createElement('div');
        d.className = 'indivCriteriaHolder';
        document.getElementById('criteriaHolder').appendChild(d);

        var b = document.createElement('div');
        b.className = 'bullet';
        document.getElementsByClassName('indivCriteriaHolder')[i].appendChild(b);

        var t = document.createElement('p');
        t.innerHTML = criteria[i];
        t.className = 'bulletText';
        document.getElementsByClassName('indivCriteriaHolder')[i].appendChild(t);
    }
}

createCriteria();