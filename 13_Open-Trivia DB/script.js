
var sco=0
var opendbUrl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
async function makeRequest() {
    try {
          
        var opendb = await fetch(opendbUrl)
        var opendata = await opendb.json()
        console.log(opendata)
        var cont = document.createElement('div')
            cont.classList.add("container")
            cont.setAttribute('id', 'cont')
            var score = document.createElement('div')
            score.classList.add("col-6","float-right")
            score.innerHTML = "<h3>Score:</h3>"
            score.style.color = "blue"
            score.setAttribute('id', 'score')
            var ansdiv = document.createElement('div')
            ansdiv.classList.add("input-group-prepend")
            var answer = document.createElement('input')
            answer.id = "answer"
            answer.classList.add("btn-outline-primary","btn-sm","ans-text")
            answer.innerHTML = "ans:"
            answer.setAttribute('type', "text")
            var label = document.createElement('label')
            label.setAttribute('for','answer')
            label.classList.add("input-group-text")
            label.innerHTML = "Ans:"
        
        ansdiv.append(label, answer)
        cont.append(score,ansdiv)
        for (var i = 0; i < opendata.results.length; i++) {
                        
            var quesno = document.createElement('div')
            quesno.classList.add("row", "col-6")
            quesno.innerHTML = `<h3>Question:${i + 1}/10</h3>`
            quesno.setAttribute("id", "progressText")
            quesno.style.color = "blue"
            quesno.innerHTML = `<h3>Question:${i + 1}/10</h3>`
            var question = document.createElement('div')
            question.id = "question"
            question.innerHTML=`${opendata.results[i].question}`
           // creating answers(options ) as a list action
            var ol = document.createElement('ol')
            ol.classList.add("list-group-item-action")
            ol.setAttribute('type', 'A')
            var li = document.createElement('li')
            li.classList.add("choice-text")
            li.id="option1"
            li.innerHTML = `${opendata.results[i].incorrect_answers[0]}`
            li.style.backgroundColor = "lightgrey"
            var li1 = document.createElement('li')
            li1.classList.add("choice-text")
            li1.id="option2"
            li1.innerHTML = `${opendata.results[i].incorrect_answers[1]}`
            li1.style.backgroundColor = "lightgrey"
            var li2 = document.createElement('li')
            li2.classList.add("choice-text")
            li2.id="option3"
            li2.innerHTML = `${opendata.results[i].incorrect_answers[2]}`
            li2.style.backgroundColor = "lightgrey"
            var li3 = document.createElement('li')
            li3.classList.add("choice-text")
            li3.id="option4"
            li3.innerHTML = `${opendata.results[i].correct_answer}`
            li3.style.backgroundColor = "lightgrey"
            
            ol.append(li,li1,li2,li3)
            cont.append(quesno,question,ol)
            document.body.append(cont)
                    
        }
        //verifying the correct answers
            var ans = document.getElementsByClassName("choice-text")
            for (var k = 0; k < ans.length; k++)
            {
                ans[k].addEventListener('click', function () {
                    if (this.id == "option4") {
                        var c_ans=document.getElementById("answer")
                        c_ans.value = this.innerHTML
                        var f_score=document.getElementById('score')
                        sco += 10
                        f_score.innerHTML = `<h2>Score:${sco}</h2>`
                        localStorage.setItem('score',sco)
                    }
                    else {
                        this.style.backgroundColor="red"
                    }
                })
        }
        var finish = document.createElement('a')
        finish.classList.add("col-2", "btn-primary", "btn-lg","float-right")
        finish.id="finishbtn"
        finish.style.textAlign = "center"
        finish.style.backgroundColor="#9098"
        finish.innerHTML = "Finish Test"
        finish.href = "end.html"
        document.body.append(finish)
                   
    } catch (error) {
        console.log(error)
    } 
}

makeRequest()
