const loadPhone = async (searchText,isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    // console.log(phones);
    displayPhones(phones,isShowAll);

}

const displayPhones = (phones,isShowAll) =>{
    // 1. Get the id
    const phoneContainer = document.getElementById('phone-container');

    // clear phone container cards before adding new cards
    phoneContainer.textContent = '';


    // Display show all button if there are more than 12 phones
    showAllContainer = document.getElementById('show-all-container');
    if (phones.length>12 && !isShowAll ){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden');
    }

    console.log('is show all');
    // display 12 phones if not show all
    
    if(!isShowAll){
        phones = phones.slice(0,12)
    }

    phones.forEach(phone => {
        // 2. Create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;

        // 3. Set innerHTML
        phoneCard.innerHTML = `
        <figure>
        <img src="${phone.image}"
            alt="phone" />
        </figure>
        <div class="card-body text-gray-950">
            <h2 class="card-title font-black">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `

        // 4. append child
        phoneContainer.appendChild(phoneCard);
        
    });
    // hide loading spinner
    toggleLoadingSpinner(false);
    
}

const handleShowDetails = async (id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    showPhoneDetails(phone);
}

// show phone details
const showPhoneDetails = (phone) =>{
    console.log(phone);
    const PhoneName = document.getElementById('phone-name');
    PhoneName.innerText = phone.name;

    const showDetailsContainer = document.getElementById('show-details-container');
    showDetailsContainer.innerHTML = `
    <figure>
    <img src="${phone.image}"
        alt="phone" />
    </figure>
    <p><span class="font-bold">Storage:</span>${phone?.mainFeatures?.storage}</p>
    <p><span class="font-bold">Display Size:</span>${phone?.mainFeatures?.displaySize}</p>
    <p><span class="font-bold">ChipSet:</span>${phone?.mainFeatures?.chipSet}</p>
    <p><span class="font-bold">Memory:</span>${phone?.mainFeatures?.memory}</p>
    <p><span class="font-bold">GPS:</span>${phone?.others?.GPS || 'No GPS'}</p>
    `
    // show the modal
    show_details_modal.showModal();
}

// Handle search button
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText,isShowAll);
}

const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}


// Handle show all
const handleShowAll = () => {
    handleSearch(true);
}