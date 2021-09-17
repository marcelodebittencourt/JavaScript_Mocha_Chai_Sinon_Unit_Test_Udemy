module.exports = IsAlive;

function IsAlive(ping)
{
    var pingOneSucess = ping();
    var pingTwoSucess = ping();
    var pingThreeSucess = ping();

    if (pingOneSucess && pingTwoSucess && pingThreeSucess)
        return true;

    return false;
}