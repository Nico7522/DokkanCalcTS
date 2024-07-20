import { CharacterType } from "./enums/enums.js";

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
const bossClass = document.querySelector(".boss-class") as HTMLSelectElement;
const charClass = document.querySelector(".char-class") as HTMLSelectElement;
const bossType = document.querySelector(".boss-type") as HTMLSelectElement;
const charType = document.querySelector(".char-type") as HTMLSelectElement;
const passifGuard = document.querySelector(".passif-guard") as HTMLInputElement;

const reduction = document.querySelector(".reduction") as HTMLInputElement;
const defense = document.querySelector(".defense") as HTMLInputElement;

const btnSubmitForGard = document.querySelector(
  ".btn-gard-submit"
) as HTMLButtonElement;

// Defense calc btn listeners
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
  const bossClassSelected = bossClass.value;
  const charClassSelected = charClass.value;
  const bossTypeSelected = bossType.value;
  const charTypeSelected = charType.value;
  const isPassifGuardChecked = passifGuard.checked;
  console.log(
    bossClassSelected,
    charClassSelected,
    bossTypeSelected,
    charTypeSelected,
    isPassifGuardChecked
  );

  let typeMultiplier: number = 0;
  if (isPassifGuardChecked) {
    typeMultiplier = 0.8;
  } else {
    if (
      bossClassSelected === charClassSelected &&
      getType(
        charTypeSelected as unknown as CharacterType,
        bossTypeSelected as unknown as CharacterType
      ) === "type disadvantage"
    ) {
      typeMultiplier = 1.25;
      console.log(typeMultiplier);
    }
  }
  // const appliedReduction =
  //   reduction.value.length === 0 ? 1 : 1 - +reduction.value;
  // const total =
  //   (+bossDamage.value *s
  //     +variance.value *
  //     +typeMultiplier.value *
  //     appliedReduction -
  //     +defense.value) *
  //   +guardMultiplier.value;

  // guardRecutionResult.innerHTML = `${total} dégâts reçus`;
  // guardRecutionResult.classList.add("mt-5");
});

function getType(charType: CharacterType, bossType: CharacterType): string {
  if (charType === bossType) {
    return "neutral type";
  }
  // AGI PUI
  if (charType === CharacterType.AGI && bossType === CharacterType.PUI) {
    return "type advantage";
  }
  if (charType === CharacterType.PUI && bossType === CharacterType.AGI) {
    return "type disadvantage";
  }

  // PUI END
  if (charType === CharacterType.PUI && bossType === CharacterType.END) {
    return "type advantage";
  }
  if (charType === CharacterType.END && bossType === CharacterType.PUI) {
    return "type disadvantage";
  }

  // END INT
  if (charType === CharacterType.END && bossType === CharacterType.INT) {
    return "type advantage";
  }
  if (charType === CharacterType.INT && bossType === CharacterType.END) {
    return "type disadvantage";
  }

  // INT TEC
  if (charType === CharacterType.INT && bossType === CharacterType.TEC) {
    return "type advantage";
  }
  if (charType === CharacterType.TEC && bossType === CharacterType.INT) {
    return "type disadvantage";
  }

  // AGI TEC

  if (charType === CharacterType.TEC && bossType === CharacterType.AGI) {
    return "type advantage";
  }
  if (charType === CharacterType.AGI && bossType === CharacterType.TEC) {
    return "type disadvantage";
  }

  return "neutral type";
}
