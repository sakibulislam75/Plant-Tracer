let thrivingList = [];
let struglingList = [];
let currentStatus = 'all';
let total = document.getElementById('total');
let thrivingCount = document.getElementById('thriving-1');
let struglingCount = document.getElementById('strugling-1');

// btn
let allBtn = document.getElementById('all');
let thrivingBtn = document.getElementById('thriving-2');
let struglingBtn = document.getElementById('strugling-2');

let all = document.getElementById('all-card');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filterSection')



function allcount() {
    total.innerText = all.children.length;
    thrivingCount.innerText = thrivingList.length;

    struglingCount.innerText = struglingList.length;
}
allcount();

// toggle
function toggleStyle(id) {
    currentStatus = id;;
    allBtn.classList.remove('bg-black', 'text-white');
    thrivingBtn.classList.remove('bg-black', 'text-white');
    struglingBtn.classList.remove('bg-black', 'text-white');

    allBtn.classList.add('bg-gray-200', 'text-black');
    thrivingBtn.classList.add('bg-gray-200', 'text-black');
    struglingBtn.classList.add('bg-gray-200', 'text-black');

    let clickId = document.getElementById(id);
    clickId.classList.remove('bg-gray-200', 'text-black');
    clickId.classList.add('bg-black', 'text-white');
    if (id == 'thriving-2') {
        all.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderThriving();
    } else if (id == 'all') {
        all.classList.remove('hidden');
        filterSection.classList.add('hidden');

    } else if (id == 'strugling-2') {
        all.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderStrugling();
    }



}


// event-delegation
mainContainer.addEventListener('click', function(event) {

    if (event.target.classList.contains('btn-success')) {

        let parentNode = event.target.parentNode.parentNode;

        let plantName = parentNode.querySelector('.plant-name').innerText;
        let latinName = parentNode.querySelector('.latin-name').innerText;
        let light = parentNode.querySelector('.light').innerText;
        let water = parentNode.querySelector('.water').innerText;
        let sts = parentNode.querySelector('.sts').innerText;
        let note = parentNode.querySelector('.note').innerText;

        let cardInfo = { plantName, latinName, light, water, sts: 'Thrive', note };

        let thrivingListExist = thrivingList.find(item => item.plantName == cardInfo.plantName);

        //  .innerText দিয়ে string নিছি তাই পরে class পরিবর্তন করতে হলে আসল DOM element variable রাখতে হয় তাই sts1 new variable assign করছি
        const sts1 = parentNode.querySelector('.sts');
        sts1.innerText = 'Thrive';
        sts1.classList.replace('badge-gray', 'badge-success');


        // //  Left border green + thick
        // parentNode.classList.remove('border-gray-300');
        // parentNode.classList.add('border-green-500');
        // parentNode.classList.remove('border-l-4');
        // parentNode.classList.add('border-l-8');

        if (!thrivingListExist) {
            thrivingList.push(cardInfo);
        }
        struglingList = struglingList.filter(item => item.plantName != cardInfo.plantName);
        if (currentStatus == 'strugling-2') {
            renderStrugling();
        }
        allcount();



    } else if (event.target.classList.contains('btn-error')) {

        let parentNode = event.target.parentNode.parentNode;
        let plantName = parentNode.querySelector('.plant-name').innerText;
        let latinName = parentNode.querySelector('.latin-name').innerText;
        let light = parentNode.querySelector('.light').innerText;
        let water = parentNode.querySelector('.water').innerText;
        let sts = parentNode.querySelector('.sts').innerText;
        let note = parentNode.querySelector('.note').innerText;

        let cardInfo = { plantName, latinName, light, water, sts: 'strugle', note };

        let struglingList1 = struglingList.find(item => item.plantName == cardInfo.plantName);

        //  .innerText দিয়ে string নিছি তাই পরে class পরিবর্তন করতে হলে আসল DOM element variable রাখতে হয় তাই sts1 new variable assign করছি
        const sts1 = parentNode.querySelector('.sts');
        sts1.innerText = 'Struggle';
        sts1.classList.replace('badge-gray', 'badge-error');

        // // 🔥 Left border green + thick
        // parentNode.classList.remove('border-gray-300');
        // parentNode.classList.add('border-green-500');
        // parentNode.classList.remove('border-l-4');
        // parentNode.classList.add('border-l-8');

        if (!struglingList1) {
            struglingList.push(cardInfo);
        }
        thrivingList = thrivingList.filter(item => item.plantName != cardInfo.plantName)
        if (currentStatus == 'thriving-2') {
            renderThriving();
        }

        allcount();


    } else if (event.target.closest(".btn-delete")) {

        let parentNode = event.target.closest(".card"); //closest -use to search above the parentNode

        let plantName = parentNode.querySelector('.plant-name').innerText;

        thrivingList = thrivingList.filter(
            item => item.plantName !== plantName
        );

        struglingList = struglingList.filter(
            item => item.plantName !== plantName
        );

        parentNode.remove();

        allcount();
    }


});

// filterSection
function renderThriving() {
    filterSection.innerHTML = ' ';
    for (let thrive of thrivingList) {
        console.log(thrive);
        let div = document.createElement('div');
        div.className = 'w-full p-5  flex justify-between items-start border-left border-green';
        div.innerHTML = ` <!-- left -->
                    <div class="p1 space-y-6">
                        <!-- p1 -->
                        <div>
                            <h1 class="text-2xl font-medium plant-name">${thrive.plantName}</h1>
                            <p class="text-gray-600 latin-name">Latin Name</p>
                        </div>
                        <!-- p2 -->
                        <div class="flex gap-1">
                            <p class="bg-gray-300  p-1 rounded-b-sm light">Bright Indicate</p>
                            <p class="bg-gray-300 p-1  rounded-b-sm water">Weekly</p>
                        </div>
                        <!-- P3 -->
                        <div class="space-y-1.5">
                            <p class="badge badge-outline badge-success sts">${thrive.sts}</p>
                            <p class="text-gray-600 note">New Leaf Unfurling By The East Window</p>
                        </div>

                        <div class="space-x-2 mt-2">
                            <button class="btn btn-outline btn-success px-5 py-2" id="thrivling-3">Thrivling</button>
                            <button class="btn btn-outline btn-error px-5 py-2" id='strugling-3'>Strugling</button>
                        </div>
                    </div>

                    <!-- right -->
                    <div class="p2">
                        <button class="btn bg-red-200 font-bold text-red-400 px-5">Delete</button>
                    </div>`;

        filterSection.appendChild(div);
    }

}


function renderStrugling() {
    filterSection.innerHTML = '';

    for (let strugle of struglingList) {

        let div = document.createElement('div');
        div.className = 'w-full p-5  flex justify-between items-start border-left border-green';
        div.innerHTML = ` <!-- left -->
                    <div class="p1 space-y-6">
                        <!-- p1 -->
                        <div>
                            <h1 class="text-2xl font-medium plant-name">${strugle.plantName}</h1>
                            <p class="text-gray-600 latin-name">Latin Name</p>
                        </div>
                        <!-- p2 -->
                        <div class="flex gap-1">
                            <p class="bg-gray-300  p-1 rounded-b-sm light">Bright Indicate</p>
                            <p class="bg-gray-300 p-1  rounded-b-sm water">Weekly</p>
                        </div>
                        <!-- P3 -->
                        <div class="space-y-1.5">
                            <p class="badge badge-outline badge-error sts">${strugle.sts}</p>
                            <p class="text-gray-600 note">New Leaf Unfurling By The East Window</p>
                        </div>

                        <div class="space-x-2 mt-2">
                            <button class="btn btn-outline btn-success px-5 py-2" id="thrivling-3">Thrivling</button>
                            <button class="btn btn-outline btn-error px-5 py-2" id='strugling-3'>Strugling</button>
                        </div>
                    </div>

                    <!-- right -->
                    <div class="p2">
                        <button class="btn bg-red-200 font-bold text-red-400 px-5">Delete</button>
                    </div>`;

        filterSection.appendChild(div);
    }
}