document.getElementById('blockButton').addEventListener('click', function() {
    const site = document.getElementById('siteInput').value.trim();
    if (site) {
        chrome.storage.sync.get("blockedSites", function (data) {
            const blockedSites = data.blockedSites || [];
            if (!blockedSites.includes(site)) {
                blockedSites.push(site);
                chrome.storage.sync.set({ blockedSites: blockedSites }, function () {
                    alert(`${site} has been blocked.`);
                    updateBlockingRulesInBackground(blockedSites);
                    document.getElementById('siteInput').value = ''; 
                });
            } else {
                alert(`${site} is already blocked.`);
            }
        });
    }
});

function updateBlockingRulesInBackground(blockedSites) {
    chrome.runtime.sendMessage({ action: "updateBlockingRules", blockedSites: blockedSites });
}

document.getElementById('adminButton').addEventListener('click', function() {
    const password = prompt("Enter admin password:");
    if (password) {
        chrome.storage.sync.get("adminPassword", function(data) {
            if (data.adminPassword === password) {
                showBlockedSites();
            } else {
                alert("Incorrect password.");
            }
        });
    }
});

document.getElementById('setPasswordButton').addEventListener('click', function() {
    const newPassword = document.getElementById('adminPasswordInput').value.trim();
    if (newPassword) {
        chrome.storage.sync.set({ adminPassword: newPassword }, function() {
            alert("Admin password has been set.");
            document.getElementById('passwordContainer').style.display = 'none'; 
        });
    } else {
        alert("Please enter a valid password.");
    }
});

chrome.storage.sync.get("adminPassword", function(data) {
    if (data.adminPassword === "admin") {
        document.getElementById('passwordContainer').style.display = 'block'; 
    } else {
        document.getElementById('passwordContainer').style.display = 'none'; 
    }
});




function showBlockedSites() {
    chrome.storage.sync.get("blockedSites", function(data) {
        const blockedSites = data.blockedSites || [];
        const siteContainer = document.getElementById('blockedSitesContainer');
        siteContainer.innerHTML = ''; 

        const header = document.createElement('h1');
        header.textContent = "Blocked Sites";

        const topBar = document.createElement('div');
        topBar.className = 'bar'; 

        const bottomBar = document.createElement('div');
        bottomBar.className = 'bar'; 

        siteContainer.appendChild(topBar);
        siteContainer.appendChild(header);
        siteContainer.appendChild(bottomBar);

        const siteList = blockedSites.map(site => {
            const div = document.createElement('div');
            div.textContent = site;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
                removeSite(site);
            });

            div.appendChild(removeButton);
            return div;
        });

        siteList.forEach(div => siteContainer.appendChild(div));
    });
}


function removeSite(site) {
    const password = prompt("Enter admin password to remove the site:");
    if (password) {
        chrome.storage.sync.get("adminPassword", function(data) {
            if (data.adminPassword === password) {
                chrome.storage.sync.get("blockedSites", function(data) {
                    let blockedSites = data.blockedSites || [];
                    blockedSites = blockedSites.filter(s => s !== site);
                    chrome.storage.sync.set({ blockedSites: blockedSites }, function() {
                        alert(`${site} has been removed from the block list.`);
                        updateBlockingRulesInBackground(blockedSites);
                        showBlockedSites(); 
                    });
                });
            } else {
                alert("Incorrect password. Site not removed.");
            }
        });
    }
}
