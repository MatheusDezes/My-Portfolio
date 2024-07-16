var NameCompany = document.querySelector(".name-company");
var CargoExperience = document.querySelector(".cargo-experience");
var DateExperience = document.querySelector(".date-experience");
var ResumeExperience = document.querySelector(".resume-experience");


    document.getElementById("card1").addEventListener('click', () => {
        NameCompany.textContent = "Freelancer";
        CargoExperience.textContent = "Desenvolvedor Web";
        DateExperience.textContent = "Abr 2024 - Atual";
        ResumeExperience.textContent = "Trabalhando de forma autonoma, lidando diretamente com cliente do começo ao final do projeto.";
    });


    document.getElementById("card2").addEventListener('click', () => {
        NameCompany.textContent = "São Carlos Empreendimentos";
        CargoExperience.textContent = "Auxiliar Fiscal";
        DateExperience.textContent = "Mar 2023 - Abril 2024";
        ResumeExperience.textContent = "Realizei o controle da esteira de pagamentos, analisandocom precisão e atenção aos detalhes Notas Fiscais, Danfes e NDs assim digitalizando todo conteudo. Criação de diversas planilhas em EXCEL automatizadas para o controle de consultas mensais de Orgãos publicos.";
    });

    
var ChangeExperience = document.querySelectorAll(".change-experience")

    function HoverExperience(){
        ChangeExperience.forEach((experience)=>
            experience.classList.remove('active-experience')
)
    this.classList.add('active-experience')
}

    ChangeExperience.forEach((experience)=>
        experience.addEventListener('click', HoverExperience)
)



