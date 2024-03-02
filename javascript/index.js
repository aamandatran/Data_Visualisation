async function translateDataset(fileCSV) {
    let data = await d3.dsv(";", fileCSV, d => {
        return d.Summa_domar_strafforelagganden_och_Atalsunderlatelser_darav_domar;
    });

    return data;
}

let skane_lagfordabrott_2003 = translateDataset("lagfordabrott_2003_skane.csv");
console.log(skane_lagfordabrott_2003);