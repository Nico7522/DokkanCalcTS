const guardRecutionResult = document.querySelector(
  ".guard-reduction-result"
) as HTMLTitleElement;
const defenseResult = document.querySelector(
  ".defense-result"
) as HTMLTitleElement;

// Calcul for total def
const defenseBeforeAttack = document.querySelector(
  ".defense-before-attack"
) as HTMLInputElement;
const passifMultiplier = document.querySelector(
  ".passif-multiplier"
) as HTMLInputElement;
const onAttackMultiplier = document.querySelector(
  ".attack-multiplier"
) as HTMLInputElement;
const btnSubmitForDefense = document.querySelector(
  ".btn-defense-submit"
) as HTMLButtonElement;
const defenseCalcContainer = document.querySelector(
  ".defense-calc-container"
) as HTMLDivElement;

// Calculc with gard/reduction
const bossDamage = document.querySelector(".boss-damage") as HTMLInputElement;
const variance = document.querySelector(".variance") as HTMLInputElement;
const typeMultiplier = document.querySelector(
  ".type-multiplier"
) as HTMLInputElement;
const reduction = document.querySelector(".reduction") as HTMLInputElement;
const defense = document.querySelector(".defense") as HTMLInputElement;
const guardMultiplier = document.querySelector(
  ".guard-multiplier"
) as HTMLInputElement;

const btnSubmitForGard = document.querySelector(
  ".btn-gard-submit"
) as HTMLButtonElement;

// Defense calc btn listener
btnSubmitForDefense?.addEventListener("click", (e) => {
  e.preventDefault();
  const totalDefense =
    +defenseBeforeAttack.value *
    +passifMultiplier.value *
    +onAttackMultiplier.value;
  defenseResult.innerHTML = `${totalDefense} Défense`;
  defenseResult.classList.add("mt-5");
});

// Guard/Reduction calc btn listener
btnSubmitForGard.addEventListener("click", (e) => {
  e.preventDefault();
  const appliedReduction =
    reduction.value.length === 0 ? 1 : 1 - +reduction.value;
  const total =
    (+bossDamage.value *
      +variance.value *
      +typeMultiplier.value *
      appliedReduction -
      +defense.value) *
    +guardMultiplier.value;

  guardRecutionResult.innerHTML = `${total} dégâts reçus`;
  guardRecutionResult.classList.add("mt-5");
});
