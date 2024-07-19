"use strict";
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
const typeMultiplier = document.querySelector(".type-multiplier");
const reduction = document.querySelector(".reduction");
const defense = document.querySelector(".defense");
const guardMultiplier = document.querySelector(".guard-multiplier");
const btnSubmitForGard = document.querySelector(".btn-gard-submit");
// Defense calc btn listener
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
    const appliedReduction = reduction.value.length === 0 ? 1 : 1 - +reduction.value;
    const total = (+bossDamage.value *
        +variance.value *
        +typeMultiplier.value *
        appliedReduction -
        +defense.value) *
        +guardMultiplier.value;
    guardRecutionResult.innerHTML = `${total} dégâts reçus`;
    guardRecutionResult.classList.add("mt-5");
});
