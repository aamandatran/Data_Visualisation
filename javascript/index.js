async function translateDatasetLagforda(fileCSV) {
    let data = await d3.dsv(";", fileCSV, d => {
        return d.Summa_domar_strafforelagganden_och_Atalsunderlatelser_darav_domar;
    });

    return data;
}

async function translateDatasetAnmalda(fileCSV) {
    let data = await d3.dsv(";", fileCSV, d => {
        return d.Hela_aret;
    });

    return data;
}

let skane_lagforda_brott_2003 = translateDatasetLagforda("lagforda_brott/y2003/lagforda_brott_2003_skane");
console.log(skane_lagforda_brott_2003);


let blekinge_anmalda_brott_2003 = translateDatasetAnmalda("anmalda_brott/y2003/anmalda_brott_2003_blekinge");
console.log(blekinge_anmalda_brott_2003);