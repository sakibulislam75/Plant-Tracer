let thrivingList = [];
let struglingLisit = [];
let total = document.getElementById('total');
let thrivingCount = document.getElementById('thriving-1');
let struglingCount = document.getElementById('strugling-1');

let allBtn = document.getElementById('all');
let thrivingBtn = document.getElementById('thriving-2');
let struglingBtn = document.getElementById('strugling-2');

let all = document.getElementById('all-card');


function allcount() {
    total.innerText = all.children.length;
    thrivingCount.innerText = thrivingList.length;
    struglingCount.innerText = struglingLisit.length;
}
allcount();

// toggle
function toggleStyle(id) {
    allBtn.classList.remove('bg-black', 'text-white');
    thrivingBtn.classList.remove('bg-black', 'text-white');
    struglingBtn.classList.remove('bg-black', 'text-white');

    allBtn.classList.add('bg-gray-200', 'text-black');
    thrivingBtn.classList.add('bg-gray-200', 'text-black');
    struglingBtn.classList.add('bg-gray-200', 'text-black');

    let clickId = document.getElementById(id);
    clickId.classList.remove('bg-gray-200', 'text-black');
    clickId.classList.add('bg-black', 'text-white');

}