function handleTabChange(event, tabIdToDisplay) {
    let tabcontent, tablinks;
    // console.log(document.getElementsByClassName('tabs__activebar'))
    // to change the position of active bar line
    let activeBarNumber = Number(tabIdToDisplay.split('-')[1]) * 40;
    document.getElementsByClassName('tabs__activebar')[0].style.transform = `translateY(${activeBarNumber}px)`;

    tabcontent = document.getElementsByClassName("tabcontent");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display ='none';
    }

    tablinks = document.getElementsByClassName("tabs__item");

    for (let i = 0; i < tablinks.length; i++) {
        // tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        console.log(tablinks[i].className)
    }

    document.getElementById(tabIdToDisplay).style.display = "block";

    event.currentTarget.className += " active";
}

document.getElementById("defaultSelectedTab").click();


const featureHeadingsSwitcher = {
    featureHeadingsText: ['Application Monitoring and Debugging', 'Customizable Security Policies & Visibility', 'Insightful Deployment metrics'],
    handleHeadingClick(indexClicked) {
        const currentlySelected = this.featureHeadingsText[0];
        this.featureHeadingsText[0] = this.featureHeadingsText[indexClicked];
        this.featureHeadingsText[indexClicked] = currentlySelected;
        this.fillValuesInDivs();
    },
    fillValuesInDivs() {
        const featureHeadings = document.getElementsByClassName("featureHeading");
        for (let i = 0; i < featureHeadings.length; i++) {
            featureHeadings[i].innerText = this.featureHeadingsText[i];
        }
    }
}

featureHeadingsSwitcher.fillValuesInDivs();