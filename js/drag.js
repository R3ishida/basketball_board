var offence1 = $('#offence1').position();
var offence2 = $('#offence2').position();
var offence3 = $('#offence3').position();
var offence4 = $('#offence4').position();
var offence5 = $('#offence5').position();
var goal = $('.goal').position();

baller_num = 0


goal_weight = 1
player_weight = 1

width = window.innerWidth 
height = window.innerHeight

goal_position = [width*0.5, height-width*0.05]


console.log($('#offence1').offset().top)

baller_index = 0

function move(){
    draw()

    $('.player').draggable({
        containment: '.court-box',
        scroll: false,
    })
    
    $('.player').on('dblclick', function() {
        $('.player').css('border', 'none');
        $(this).css('border', 'solid 10px rgb(255, 255, 110)')
        baller_id = $(this).text()
        baller_index = baller_id - 1
    })

    document.onkeydown = event => draw()

}



function getDistance(position1 = [x1,y1],position2 = [x2,y2]) {
    return Math.sqrt( Math.pow( position1[0]-position2[0], 2 ) + Math.pow( position1[1]-position2[1], 2 ) )
}

function getCenter(p1=[x1,y1],p2=[x2,y2],p3=[x3,y3],w1,w2,w3) {
    x = (p1[0]*w1 + p2[0]*w2 + p3[0]*w3)/(w1+w2+w3)
    y = (p1[1]*w1 + p2[1]*w2 + p3[1]*w3)/(w1+w2+w3)
    return [x,y]
}

function getIsosceles(p1=[x1,y1],p2=[x2,y2]) {
    dist = getDistance(p1, p2)
    if(p1[0] > p2[0]) {
        a = p2
        b = p1
    } else {
        a = p1
        b = p2
    }
    dist2 = getDistance([0,0],[b[0]-a[0], b[1]-a[1]])
    console.log(dist2)
    rate = dist/3/dist2
    x = (a[0]+b[0])/2-(b[1]-a[1])*rate
    y = (a[1]+b[1])/2+(b[0]-a[0])*rate
    return [x,y]
}

function getOffencePosition() {
    list = []
    $('.offence').each(function(index) {
        x = $(this).offset().left
        y = $(this).offset().top
        list.push([x,y])
    })
    return list
}

function getDefencePosition(offence_position) {
    $('.defence').each(function(index) {
        markman_position = offence_position[index]
        if(index == baller_index) {
            defence_position = getCenter(markman_position, offence_position[baller_index], goal_position, 5,1,1)
        } else {
            defence_position = getCenter(markman_position, offence_position[baller_index], goal_position, 3,2,2)
            // defence_position = getIsosceles(markman_position, offence_position[baller_index])
        }
        $(this).offset({
            left: defence_position[0],
            top: defence_position[1]
        })
        console.log(index, defence_position)
    })
}

function draw() {
    getDefencePosition(getOffencePosition())
}

$(function() {
    move()
})

function unko(){
    $('.player').draggable({
    })
    
    $('.player').on('dblclick', function() {
        $('.player').css('border', 'none');
        $(this).css('border', 'solid 10px rgb(255, 255, 110)')
        baller_id = $(this).text()
        baller_index = baller_id - 1
    })
}

// $(function() {
//     unko()
// })


        // cover_list = []
        // offence_position.forEach(function(elem, index) {
        //     cover_list.push(getDistance(markman_position, elem))
        // })
        // var index_list=[0,1,2,3,4];
        // function bcmp(v1, v2) {
        //     return cover_list[v1] - cover_list[v2];
        // }
        // index_list.sort(bcmp);
        // cover_offence_index = index_list[1]
        // cover_offence_position = offence_position[cover_offence_index]
