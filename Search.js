import wixData from 'wix-data;

$w.onReady(function () {

});

export function input2_keyPress(event, $w) {
  let searchValue = $w("#input2").value;
  $w("#dataset1").setFilter(wixData.filter().contains('name', searchValue)
  .or(wixData.filter().contains('city', searchValue)));
}
