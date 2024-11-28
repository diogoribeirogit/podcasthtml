// Função para gerenciar o clique nas estrelas e mudar a avaliação
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const ratingText = document.getElementById('ratingText');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const ratingValue = parseInt(star.getAttribute('data-value'));

            // Remover a classe 'selected' de todas as estrelas
            stars.forEach(star => {
                star.classList.remove('selected');
            });

            // Adicionar a classe 'selected' até a estrela clicada
            for (let i = 0; i < ratingValue; i++) {
                stars[i].classList.add('selected');
            }

            // Atualizar o texto de avaliação
            ratingText.textContent = `Você avaliou com ${ratingValue} estrela(s)`;
        });

        // Efeito de hover para mudar as cores das estrelas
        star.addEventListener('mouseover', function() {
            const ratingValue = parseInt(star.getAttribute('data-value'));

            stars.forEach(star => {
                if (parseInt(star.getAttribute('data-value')) <= ratingValue) {
                    star.style.color = '#ffca28';
                } else {
                    star.style.color = '#ccc';
                }
            });
        });

        // Remover o efeito de hover quando o mouse sai
        star.addEventListener('mouseout', function() {
            stars.forEach(star => {
                star.style.color = star.classList.contains('selected') ? '#ffca28' : '#ccc';
            });
        });
    });
});
