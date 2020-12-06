function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
    var takeOutIndex = 0;
    var dineInIndex = 0;
    for (var i = 0; i < servedOrders.length; i++) {
        if (takeOutOrders[takeOutIndex] && servedOrders[i] == takeOutOrders[takeOutIndex]) {
            takeOutIndex++;
        } else if (dineInOrders[dineInIndex] && servedOrders[i] == dineInOrders[dineInIndex]) {
            dineInIndex++;
        } else {
            return false;
        }
    }
    if (takeOutIndex != takeOutOrders.length || dineInIndex != dineInOrders.length) {
        return false;
    }
    return true;
}

//O(n) time and O(1) space
console.log(isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]));

/*
function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
    var takeOutOrdersIndex = 0;
    var dineInOrdersIndex = 0;
    var takeOutOrdersMaxIndex = takeOutOrders.length - 1;
    var dineInOrdersMaxIndex = dineInOrders.length - 1;

    for (var i = 0; i < servedOrders.length; i++) {
        var order = servedOrders[i];

        // if we still have orders in takeOutOrders
        // and the current order in takeOutOrders is the same
        // as the current order in servedOrders
        if (takeOutOrdersIndex <= takeOutOrdersMaxIndex &&
                order === takeOutOrders[takeOutOrdersIndex]) {
            takeOutOrdersIndex++;

        // if we still have orders in dineInOrders
        // and the current order in dineInOrders is the same
        // as the current order in servedOrders
        } else if (dineInOrdersIndex <= dineInOrdersMaxIndex &&
                order === dineInOrders[dineInOrdersIndex]) {
            dineInOrdersIndex++;

        // if the current order in servedOrders doesn't match the current
        // order in takeOutOrders or dineInOrders, then we're not serving first-come,
        // first-served
        } else {
            return false;
        }
    }

    // check for any extra orders at the end of takeOutOrders or dineInOrders
    if (dineInOrdersIndex != dineInOrders.length ||
           takeOutOrdersIndex != takeOutOrders.length) {
        return false;
    }

    // all orders in servedOrders have been "accounted for"
    // so we're serving first-come, first-served!
    return true;
}
*/