import { CharacterType } from "./enums/enums.js";
const guardRecutionResult = document.querySelector(".guard-reduction-result");
const defenseResult = document.querySelector(".defense-result");
// Calcul for total def
const defenseBeforeAttack = document.querySelector(".defense-before-attack");
const passifMultiplier = document.querySelector(".passif-multiplier");
const onAttackMultiplier = document.querySelector(".attack-multiplier");
const btnSubmitForDefense = document.querySelector(".btn-defense-submit");
const defenseCalcContainer = document.querySelector(".defense-calc-container");
// Calculc with gard/reduction
const bossDamage = document.querySelector(".boss-damage");
const variance = document.querySelector(".variance");
const bossClass = document.querySelector(".boss-class");
const charClass = document.querySelector(".char-class");
const bossType = document.querySelector(".boss-type");
const charType = document.querySelector(".char-type");
const passifGuard = document.querySelector(".passif-guard");
const reduction = document.querySelector(".reduction");
const defense = document.querySelector(".defense");
const btnSubmitForGard = document.querySelector(".btn-gard-submit");
// Defense calc btn listeners
btnSubmitForDefense === null || btnSubmitForDefense === void 0 ? void 0 : btnSubmitForDefense.addEventListener("click", (e) => {
    e.preventDefault();
    const totalDefense = +defenseBeforeAttack.value *
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
    console.log(bossClassSelected, charClassSelected, bossTypeSelected, charTypeSelected, isPassifGuardChecked);
    let typeMultiplier = 0;
    if (isPassifGuardChecked) {
        typeMultiplier = 0.8;
    }
    else {
        if (bossClassSelected === charClassSelected &&
            getType(charTypeSelected, bossTypeSelected) === "type disadvantage") {
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
function getType(charType, bossType) {
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
