(() => {
  const button = document.querySelector("#qc-generate");
  button?.addEventListener("click", () => {
    const category = document.querySelector("#qc-category").value;
    const detail = document.querySelector("#qc-detail").value.trim() || "the ordered option";
    document.querySelector("#qc-result").innerHTML = `<h3>${category} QC checklist</h3><ol><li>Confirm ${detail} matches the order.</li><li>Check every angle for visible damage, stains or missing parts.</li><li>Ask for measurements where fit or dimensions matter.</li><li>Confirm packaging and accessories before acceptance.</li><li>Resolve return or exchange questions before removing original packaging.</li></ol>`;
  });
})();
