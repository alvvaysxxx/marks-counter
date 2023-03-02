pupil = document.querySelector('.pupil')
addPupil = document.querySelector('.savePupil')
marks = document.querySelector('.marks')
body = document.querySelector('body')

addPupil.addEventListener('click', function() {
    pupils[pupil.value] = {name: pupil.value, marks: marks.value}
    showInfo(pupil.value, marks.value)
    marks.value = ''
    pupil.value = ''
})

function showInfo(pupilName, pupilMarks) {
    infoHTML = document.createElement('div')
    pupilNameHTML = document.createElement('h2')
    pupilMarksHTML = document.createElement('p')
    pupilAvgCardHTML = document.createElement('div')
    pupilAvg = document.createElement('p')

    pupilAvgCardHTML.classList.add('card')
    infoHTML.classList.add('info')

    pupilAvgCardHTML.append(pupilAvg)
    pupilNameHTML.innerHTML = pupilName
    pupilMarksHTML.innerHTML = pupilMarks
    
    body.append(infoHTML)
    infoHTML.append(pupilNameHTML)
    infoHTML.append(pupilMarksHTML)
    infoHTML.append(pupilAvgCardHTML)
    pupilAvgCardHTML.append(average(pupilMarks))


}

function average(marks) {
    const marksArr = marks.replace(/\s+/g, ' ').trim().split(' ').map(Number);
    const sum = marksArr.reduce((acc, val) => acc + val, 0);
    const avg = sum / marksArr.length;
    return avg.toFixed(3);
  }
  
  

