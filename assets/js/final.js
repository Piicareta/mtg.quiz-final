
const user = document.getElementById('username')
const save = document.getElementById('btnSave')
const placarFinal = document.getElementById('placarFinal')
const ultimoPlacar = localStorage.getItem('ultimoPlacar')

const rankings = JSON.parse(localStorage.getItem('rankings')) || []

placarFinal.textContent = `Parebéns, você fez ${ultimoPlacar} pontos !`

user.addEventListener('keyup', () => {

    save.disabled = !user.value
})

savePlacar = e => {

    e.preventDefault()

    const placar = {
        nome: user.value,
        placar: ultimoPlacar
    }

    rankings.push(placar)
    rankings.sort((a,b) => b.placar - a.placar)
    rankings.splice(5)

    localStorage.setItem('rankings', JSON.stringify(rankings))

    window.location.assign('app.html')
}