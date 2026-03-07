var App = {}, Slides_1 = {}, Slides_2 = {}, Slides_3 = {},Slides_4 = {};
var weeks = [{"date":"2020-02-24","deaths":3},{"date":"2020-03-02","deaths":22},{"date":"2020-03-09","deaths":68},{"date":"2020-03-16","deaths":458},{"date":"2020-03-23","deaths":2707},{"date":"2020-03-30","deaths":10856},{"date":"2020-04-06","deaths":24849},{"date":"2020-04-13","deaths":40179},{"date":"2020-04-20","deaths":54580},{"date":"2020-04-27","deaths":67816},{"date":"2020-05-04","deaths":79765},{"date":"2020-05-11","deaths":89568},{"date":"2020-05-18","deaths":97680},{"date":"2020-05-25","deaths":104379},{"date":"2020-06-01","deaths":110422},{"date":"2020-06-08","deaths":115768},{"date":"2020-06-15","deaths":119974},{"date":"2020-06-22","deaths":125815},{"date":"2020-06-29","deaths":129941},{"date":"2020-07-06","deaths":134977},{"date":"2020-07-13","deaths":140373},{"date":"2020-07-20","deaths":146753},{"date":"2020-07-27","deaths":155337},{"date":"2020-08-03","deaths":162486},{"date":"2020-08-10","deaths":169915},{"date":"2020-08-17","deaths":176693},{"date":"2020-08-24","deaths":182984},{"date":"2020-08-31","deaths":188820},{"date":"2020-09-07","deaths":193958},{"date":"2020-09-14","deaths":199367},{"date":"2020-09-21","deaths":204602},{"date":"2020-09-28","deaths":209606},{"date":"2020-10-05","deaths":214606},{"date":"2020-10-12","deaths":219541},{"date":"2020-10-19","deaths":225160},{"date":"2020-10-26","deaths":230937},{"date":"2020-11-02","deaths":238048},{"date":"2020-11-09","deaths":246083},{"date":"2020-11-16","deaths":256597},{"date":"2020-11-23","deaths":266758},{"date":"2020-11-30","deaths":282313},{"date":"2020-12-07","deaths":299328},{"date":"2020-12-14","deaths":317800},{"date":"2020-12-21","deaths":333242},{"date":"2020-12-28","deaths":351682},{"date":"2021-01-04","deaths":374428},{"date":"2021-01-11","deaths":397612},{"date":"2021-01-18","deaths":419207},{"date":"2021-01-25","deaths":429312}];
var weekNums = [0,14, 31,43,48];
var weekNumsForVis = [0,17, 34, 46,51];
var raceData = [{"month":"10","Black, Non-Hispanic":11.49,"Hispanic/Latino":12.96,"Asian, Non-Hispanic":2.56,"Other":13.88,"White, Non-Hispanic":59.12},{"month":"11","Black, Non-Hispanic":10.42,"Hispanic/Latino":14.21,"Asian, Non-Hispanic":3.59,"Other":14.07,"White, Non-Hispanic":57.70},{"month":"12","Black, Non-Hispanic":11.18,"Hispanic/Latino":12.74,"Asian, Non-Hispanic":5.40,"Other":15.67,"White, Non-Hispanic":55.00},{"month":"3","Black, Non-Hispanic":27.41,"Hispanic/Latino":28.51,"Asian, Non-Hispanic":5.49,"Other":10.17,"White, Non-Hispanic":28.42},{"month":"4","Black, Non-Hispanic":22.45,"Hispanic/Latino":24.91,"Asian, Non-Hispanic":5.01,"Other":12.75,"White, Non-Hispanic":34.88},{"month":"5","Black, Non-Hispanic":20.11,"Hispanic/Latino":21.28,"Asian, Non-Hispanic":4.54,"Other":11.66,"White, Non-Hispanic":42.41},{"month":"6","Black, Non-Hispanic":19.51,"Hispanic/Latino":28.96,"Asian, Non-Hispanic":4.30,"Other":10.88,"White, Non-Hispanic":36.35},{"month":"7","Black, Non-Hispanic":21.40,"Hispanic/Latino":26.29,"Asian, Non-Hispanic":3.82,"Other":8.53,"White, Non-Hispanic":39.95},{"month":"8","Black, Non-Hispanic":19.51,"Hispanic/Latino":21.17,"Asian, Non-Hispanic":4.32,"Other":9.51,"White, Non-Hispanic":45.49},{"month":"9","Black, Non-Hispanic":15.91,"Hispanic/Latino":12.61,"Asian, Non-Hispanic":4.02,"Other":13.00,"White, Non-Hispanic":54.45},{"month":"deaths","Black, Non-Hispanic":19.43,"Hispanic/Latino":22.00,"Asian, Non-Hispanic":4.46,"Other":12.00,"White, Non-Hispanic":42.10},{"month":"population","Black, Non-Hispanic":12.50,"Hispanic/Latino":18.50,"Asian, Non-Hispanic":5.80,"Other":3.10,"White, Non-Hispanic":60.10}];
var ageData = [{"month":"population","0-9":12.11693755,"10-19":12.75070035,"20-29":13.75274848,"30-39":13.456279,"40-49":12.28352199,"50-59":12.90354727,"60-69":11.58487761,"70-79":7.214578179,"80+":3.936809584},{"month":"deaths","0-9":0.039287476,"10-19":0.086516037,"20-29":0.473121515,"30-39":1.212060419,"40-49":2.872165241,"50-59":7.442886877,"60-69":16.11204454,"70-79":24.80627931,"80+":46.95563859},{"month":"cases","0-9":3.957547967,"10-19":10.25409903,"20-29":19.25606198,"30-39":16.49060815,"40-49":15.09846172,"50-59":14.58929022,"60-69":10.29060716,"70-79":5.716583168,"80+":4.346740599}];
var videos = ['https://volume-assets.voxmedia.com/production/9e7614db2c13864c6b3b35a74f6f010e/1_black_silent.mp4',
    'https://volume-assets.voxmedia.com/production/312f801965a173cc1a63c42206c40266/2_black_silent.mp4',
    'https://volume-assets.voxmedia.com/production/61160bf041953e0b1e11b19b956c68dc/3_black_silent.mp4',
    'https://volume-assets.voxmedia.com/production/b7e28816054cd3d77c594db3e8bc4756/4_black_silent.mp4'
];

var racePop = raceData.filter(d=>d.month == 'population');
var numOfPhotoSlides = 2;
var staticGraphics, widthById;


App.init = function(){
    //remaining: 
    // get twitter, fb, and timestamp  _facebook.html.erb && _header.html.erb

    // encodeURIComponent(url) & encodeURIComponent(txt)
    App.mobile = window.mobileCheck();

    this.resizeImg();
    if (!d3.select(".cover-image.graphic-1").classed('is-active')) {
        d3.select(".cover-image.graphic-1").classed('is-active',true)
    }

    
    weeks.forEach(d=> d.date = d3.timeFormat("%b %e")(d3.timeParse("%Y-%m-%d")(d.date)));
    this.initSlides();
    this.buildCharts();
    App.resize();

}



App.addStaticGraphics = function(){
    
	// only want one resizer on the page
	if (document.documentElement.className.indexOf("g-resizer-v3-init") > -1) return;

	document.documentElement.className += " g-resizer-v3-init";

	staticGraphics = Array.prototype.slice.call(document.querySelectorAll(".g-artboard[data-min-width]"))
    widthById = {};

    // comment this out since imgs in /images seem to be deployed properly on the vox server
    
    // d3.selectAll('img.g-aiImg').each((d,i,el)=>{
    //     var currentPath = d3.select(el[i]).attr('src'); 
    //     if (currentPath.indexOf('images')>-1) {
    //         console.log(videoSrc + currentPath.split('\/')[1])
    //         d3.select(el[i]).attr('src',videoSrc + currentPath.split('\/')[1]);
    //     } else {return}

    // })

}

App.resizeStaticGraphic = function(){
    var wH = App.mobile? window.visualViewport.height : window.innerHeight;
    // for age-race chart:
    var width = Slides_4.slideChart.node().getBoundingClientRect().width;
    Slides_4.slideChart.select('.ai2html-insert').style('width',width+'px')



    staticGraphics.forEach(function(el) {
        var parent = el.parentNode,
            width = parent.getBoundingClientRect().width,
            minwidth = +el.getAttribute("data-min-width"),
            maxwidth = +el.getAttribute("data-max-width") || null;
        
        widthById[parent.id] = width;

        if ((+minwidth <= width) && 
            (maxwidth >= width || maxwidth === null )) 
        {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });

    var chartH = Slides_4.slideChart.select('#g-race-by-age-box').node().getBoundingClientRect().height;
    Slides_4.slideChart.select('#g-race-by-age-box')
        .style('padding-top', (wH>chartH) ? (wH-chartH)/2+'px' : 0)
}

App.buildCharts = function(){

    this.buildOpeningMap();
    this.addRaceGraphic();

    this.addStaticGraphics();
}

App.resizeImg = function(){
    var wH = App.mobile ? window.visualViewport.height : window.innerHeight, 
    wW = window.innerWidth;
    var ratio = wW / wH;
    if (ratio < 3/2) {
        d3.selectAll('figure.cover-image')
            .style('height',wH+'px')
            .style('width', wH/2*3+'px')
            .style('top',0)
            .style('left', (wW-wH/2*3)/2+'px')
    } else {
        d3.selectAll('figure.cover-image')
            .style('width', wW+'px')
            .style('height',wW/3*2+'px')
            .style('left',0)
            .style('top', (wH-wW/3*2)/2+'px')

    }
    


}

App.addAgeGraphic = function(){
    var wH = App.mobile? window.visualViewport.height : window.innerHeight;
    d3.select('section.set-3 .slides-graphic .graphic').remove();
    var title = ['Share of deaths','Share of population',"Share of cases"];
        
    var container = d3.select('section.set-3 .slides-graphic').append('div').classed('graphic',true);
    var width = container.node().getBoundingClientRect().width,
        margin = {left: 50, top:50, right: 0, bottom: 20},
        barWidth = Math.max((width-margin.left - margin.right)/12,45),
        height = Math.min(wH*0.9, (width-margin.left-margin.right)*2);
    
    var svg = container.append('svg')
        .attr('width',width)
        .attr('height',height)
        .style('margin-top', (wH - height)/3)
        .append('g')
        .attr('transform','translate('+ margin.left + ',' + margin.top + ')')
        .classed('hidden',function(){
            return d3.select('section.set-3 .slides-graphic .ai2html-insert').classed('hidden') ? false : true;
        })


    var stackedData = d3.stack().keys(_.keys(ageData[0]).slice(1))(ageData).map(d=>(d.forEach(v=>v.key = d.key),d))
    stackedData.sort((a,b)=> (a.key == '50-59' || a.key == '40-49' || a.key == '30-39'|| a.key == '20-29') ? 1 : -1);
    var y = d3.scaleLinear().domain([0, 100]).rangeRound([height - margin.top - margin.bottom, margin.top]);
    var ageContainers = svg.append('g')
        .selectAll('g.age').data(stackedData)
        .join('g')
        .attr('class',(d)=>{
            return 'age a'+ d.key.replace(/\+/g, "");
        })

    var ageBlocks = ageContainers.selectAll('g')
        .data(d=>d)
        .join('g')
        .attr('class',d=> (d.data.month == 'population' | d.data.month == 'deaths') ? 'age-block visible ' + d.data.month : 'age-block hidden ' + d.data.month)
        .attr('transform',(d,i)=>{
            var xPos,yPos = y(d[1]);

            if (d.data.month == 'population') {xPos = (width-margin.left-margin.right)/3*2 - barWidth/2;}
            else { xPos = (width-margin.left-margin.right)/3 - barWidth/2;}

            d.pos1 = 'translate(' + xPos + ',' + yPos + ')';
            return d.pos1;
        })

    // add in-between polygons
    getPolygonData = function(twoPts){

        return [
            [(width-margin.left-margin.right)/3*1+barWidth/2, y(twoPts[1][1])],
            [(width-margin.left-margin.right)/3*1+barWidth/2, y(twoPts[1][0])],
            [(width-margin.left-margin.right)/3*2-barWidth/2, y(twoPts[0][0])],
            [(width-margin.left-margin.right)/3*2-barWidth/2, y(twoPts[0][1])]
        ];

    }

    ageContainers.each((ageDt,i,el)=>{
        var deathsPtData = getPolygonData( ageDt.filter(d=> (d.data.month == 'deaths' | d.data.month == 'population')));
        var casesPtData = getPolygonData( ageDt.filter(d=> (d.data.month == 'cases' | d.data.month == 'population')));

        var currentElem = d3.select(el[i]);
        currentElem.append('polygon')
        .attr('points', deathsPtData)
        .attr('class','deaths')
        .style('fill-opacity',0.4)

        currentElem.append('polygon')
        .attr('points', casesPtData)
        .attr('class','cases')
        .style('fill-opacity',0.4)
        .classed('hidden',true)
    })

    ageBlocks.append('rect')
        .attr('rx',"3px")
        .attr('height', d=> y(d[0])- y(d[1]))
        .attr('width',barWidth)

    ageBlocks.append('text')
        .attr('transform','translate('+barWidth/2 + ',0)')
        .attr('class','age-value')
        .attr('dy',5)
        .attr('y', d=> (y(d[0])- y(d[1]))/2)
        .text(d=> (y(d[0])- y(d[1])) < 20 ? '' : Math.round(d.data[d.key])+'%')

    ageBlocks.append('text')
        .attr('transform','translate(-5,0)')
        .attr('class','age-label')
        .attr('dy',d=> d.key == '40-49'? 10:5)
        .attr('y', d=> (y(d[0])- y(d[1]))/2)
        .text(d=> d.data.month == 'population'? '' : d.key)
        .text(d=> ((y(d[0])- y(d[1])) < 15 || d.data.month == 'population') ? ((d.key == '40-49' && d.data.month!=='population') ? '49 and under' : '') : d.key)
        // .text(d=> (d.data.month == 'population' && (y(d[0])- y(d[1])) > 20)? '' : d.key);

    // add labels

    svg.append('text')
        .attr('class','head-text deaths')
        .text(title[0])
        .attr('dy',0)
        .call(wrap, (width-margin.left-margin.right)/3-12)
        .attr('transform',(d,i,el)=>{
            return 'translate('+((width-margin.left-margin.right)/3)+',' + (margin.top - el[0].getBBox().height) + ')'
        })
        svg.append('text')
        .attr('class','head-text cases hidden')
        .text(title[2])
        .attr('dy',0)
        .call(wrap, (width-margin.left-margin.right)/3-12)
        .attr('transform',(d,i,el)=>{
            return 'translate('+((width-margin.left-margin.right)/3)+',' + (margin.top - el[0].getBBox().height) + ')'
        })

    svg.append('text')
        .attr('class','head-text pop')
        .text(title[1])
        .attr('dy',0)
        .call(wrap, (width-margin.left-margin.right)/3-12)

    svg.select('text.head-text.pop')
        .attr('transform',(d,i,el)=>{
            return 'translate('+((width-margin.left-margin.right)/3*2)+',' + (margin.top - el[0].getBBox().height) + ')'
        })


    // container.append('div').attr('class','footer graphic-source')
    // .html('Source: Centers for Disease Control and Prevention, 2019 population estimates from US Census')
    // .style('max-width', ((width-margin.left-margin.right)/3 + (margin.left + margin.right))+'px')

    
}

App.formatRaceText = function(input) {
    if (input.indexOf('AIAN')>-1) {return 'Native American';}
    return input.split(/,|\//)[0];
}


App.addRaceGraphic = function(){
    var wH = App.mobile? window.visualViewport.height : window.innerHeight;
    d3.select('section.set-2 .slides-graphic').html('');
    var title = ['Share of deaths','Share of population',
    'People of color are overrepresented in pandemic deaths',
    'The racial death gap narrowed over last year'];
    var container = d3.select('section.set-2 .slides-graphic').append('div').classed('graphic',true);
    var width = container.node().getBoundingClientRect().width,
        margin = {left: 70, top:60, right: 40, bottom: 20},
        barWidth = (width-margin.left - margin.right)/12,
        barWidth2 = Math.max(barWidth,40),
        height = Math.max(margin.top + margin.bottom + wH/3*2, wH*0.8);

    var svg = container.append('svg')
        .attr('width',width)
        .attr('height',height)
        .append('g')
        .attr('transform','translate('+ margin.left + ',' + margin.top + ')')

    var stackedData = d3.stack().keys(_.keys(raceData[0]).slice(1))(raceData).map(d=>(d.forEach(v=>v.key = d.key),d))
    var y = d3.scaleLinear().domain([0, 100]).rangeRound([height - margin.top - margin.bottom, margin.top]);

    var raceContainers = svg.append('g')
        .selectAll('g.race').data(stackedData)
        .join('g')
        .attr('class',(d)=>{
            var className = d.key.replace(/[^a-zA-Z ]/g, "").split(' ')[0];
            return 'race '+ className;
        })

    var raceBlocks = raceContainers.selectAll('g')
        .data(d=>d)
        .join('g')
        .attr('class',d=> (d.data.month == 'population' | d.data.month == 'deaths') ? 'race-block visible ' + d.data.month : 'race-block hidden month month-' + d.data.month)
        .attr('transform',(d,i)=>{
            var xPos,yPos = y(d[1]);
            if (d.data.month == 'population') {xPos = (width-margin.left-margin.right)/3*2 - barWidth2/2;}
            else if (d.data.month == 'deaths') {xPos = (width-margin.left-margin.right)/3 - barWidth2/2;}
            else {
                xPos = (+d.data.month - 3)*barWidth;
            }

            d.pos1 = 'translate(' + xPos + ',' + yPos + ')';

            if (d.data.month == 'population') {
                d.pos2 = 'translate(' + (width- margin.right - margin.left - barWidth2/2) + ',' + yPos + ')'
            } else if (d.data.month == 'deaths') {
                d.pos2 = 'translate(0,' + yPos + ')'
            } else {d.pos2 = d.pos1;}

            return d.pos1;
        })

    // add month text
    raceBlocks
        .filter(d=> (d.key =='White, Non-Hispanic' && d.data.month !== 'population' && d.data.month !== 'deaths'))
        .append('text')
        .attr('class','month-text')
        .text(function(d,i) {
            return (i%2 == 0 && App.mobile) ? '' : App.formatMonth(d3.timeFormat('%b')(new Date(2020,+d.data.month-1,1)));
        })
        .attr('x', barWidth/2)
        .attr('dy',-5)

    // add in-between polygons
    raceContainers.each((raceDt,i,el)=>{
        var twoPts = raceDt.filter(d=> (d.data.month == 'population' | d.data.month == 'deaths'));
        var pts = [
            [(width-margin.left-margin.right)/3*1+barWidth2/2, y(twoPts[0][1])],
            [(width-margin.left-margin.right)/3*1+barWidth2/2, y(twoPts[0][0])],
            [(width-margin.left-margin.right)/3*2-barWidth2/2, y(twoPts[1][0])],
            [(width-margin.left-margin.right)/3*2-barWidth2/2, y(twoPts[1][1])]
        ];

        var currentElem = d3.select(el[i]);
        currentElem.append('polygon')
        .attr('points',pts)
        .style('fill-opacity',0.4)
    })

    raceBlocks.append('rect')
        .attr('rx',"3px")
        .attr('height', d=> y(d[0])- y(d[1]))
        .attr('width',d=> {
            return (d.data.month == 'population' | d.data.month == 'deaths') ? barWidth2 : barWidth;
        })

    raceBlocks.append('text')
        .attr('transform',d=> +d.data.month>0 ? 'translate('+barWidth/2 + ',0)': 'translate('+barWidth2/2 + ',0)')
        .attr('class','race-value')
        .attr('dy',5)
        .attr('y', d=> (y(d[0])- y(d[1]))/2)
        .text(d=> {
            if (y(d[0])- y(d[1]) < 20) {return ''}
            else if (barWidth < 28 && +d.data.month>0) {return ''}
            else {return Math.round(d.data[d.key])+'%'}
        })

    raceBlocks.append('text')
        .attr('transform','translate(-5,0)')
        .attr('class','race-label')
        .attr('dy',5)
        .attr('y', d=> (y(d[0])- y(d[1]))/2)
        .text(d=> ((d.data.month == 'deaths' || d.data.month == '3') && (y(d[0])- y(d[1])) > 10)? this.formatRaceText(d.key) : '');

    // add labels

// People of color are overrepresented in pandemic deaths

    svg.append('text')
        .attr('class','head-text deaths')
        .text(title[0])
        .attr('dy',0)
        .call(wrap, (width-margin.left-margin.right)/3-5)
        .attr('transform',(d,i,el)=>{
            return 'translate('+((width-margin.left-margin.right)/3)+',' + (margin.top - el[0].getBBox().height) + ')'
        })

    svg.append('text')
        .attr('class','head-text pop')
        .text(title[1])
        .attr('dy',0)
        .call(wrap, (width-margin.left-margin.right)/3)
        .attr('transform',(d,i,el)=>{
            return 'translate('+((width-margin.left-margin.right)/3*2)+',' + (margin.top - el[0].getBBox().height) + ')'
        })

    container.append('div').attr('class','footer graphic-source')
    .style('max-width', (App.mobile? width : (width-margin.left-margin.right-barWidth)/3*2)+'px')
    .html("Note: ")
    .html('Other includes Native Americans, Pacific Islanders, and multiracial people, among others. The share of deaths has been adjusted to account for differences in population among age groups.')

    
}

App.buildOpeningMap = function(){

    var videoContainers = Slides_1.slideChart.selectAll('div.video-container')
        .data([1,2,3,4]).enter().append('div')
        .attr('class',(d,i)=> 'video-container video-container-' + d + ' graphic-slide graphic-' + (d+3))

    videoContainers.html((d,i)=>{
        if (App.mobile) {
            return '<video autoplay muted playsinline src="'+videos[i]+'"></video>';
        } else {
            return '<video muted playsinline src="'+videos[i]+'"></video>';

        }
    })


    var smallMaps = Slides_1.slideChart.append('div')
        .attr('class','small-maps hidden')
        .selectAll('div.small-map')
        .data([1,2,3,4]).enter().append('div')
        .attr('class',(d)=>'small-map small-map-'+d)
        .style('width', d=>(weekNumsForVis[d] - weekNumsForVis[d-1])/51*100+'%')

    var days = [108,118,83,36];
    smallMaps.append('div')
    .attr('class','bar')
    .style('width',0)

    smallMaps.append('div')
    .attr('class','end-num num hidden')
    .html(d=> d3.format(',')(d*100)+'K')
    
    smallMaps.append('div')
    .attr('class','start-num num')
    .html(d=> d == 1 ? (App.mobile ? "1 death" : "1 confirmed death") :'');

    smallMaps.append('div')
    .attr('class','start-date num')
    .html(d=> d == 1 ? 'Feb. 6' :'');

    smallMaps.append('div')
    .attr('class','mid-num num hidden')
    .html((d,i)=> App.mobile ? (i>0 ? days[d-1] : (days[d-1] + ' days')) : (days[d-1] + ' days'));

    smallMaps.append('div')
    .attr('class','end-date num hidden')
    .html(d => {
        return App.formatMonth(weeks[weekNums[d]-1].date);
    });


}

App.formatMonth = function(date){
    return date.replace('Jan','Jan.').replace("Feb",'Feb.').replace("Mar",'Mar.').replace("Apr",'Apr.').replace("Jun",'June')
    .replace("Jul",'July').replace('Aug','Aug.').replace("Sep",'Sept.').replace("Oct",'Oct.').replace("Nov",'Nov.')
    .replace("Dec",'Dec.')
}

App.setUpSlider = function(el, slideContainerSelector){
    var slideContainer = d3.select(slideContainerSelector);
    var wH = App.mobile? window.visualViewport.height : window.innerHeight;
    var steps = slideContainer.selectAll('.step');
    var offset = Math.floor(wH) + 'px';
    
    steps.style('height', wH*0.9+'px');
    
    if (!el.slideChart) {
        el.slideChart = slideContainer.selectAll('.slides-graphic');
    }
    if (!el.slideAnnotation) {
        el.slideAnnotation = slideContainer.selectAll('.slides-annotations');
    }

    el.slideChart.style('height', wH +'px')
    el.slideAnnotation.style('padding-bottom', wH*0.2+'px');

    el.scroller = scrollama();

    el.scroller.setup({
        step: slideContainerSelector + " .step",
        offset:offset
    })


}

App.hide = function(el) {
    el.classed('hidden',true);
}
App.show = function(el) {
    el.classed('hidden',false);
}

Slides_2.init = function(){

    App.setUpSlider(Slides_2, 'section.slides.set-2');
    var wH = App.mobile? window.visualViewport.height : window.innerHeight;

    // graphic setup
    var width = Slides_2.slideChart.node().getBoundingClientRect().width,
        margin = {left: 70, top:60, right: 40, bottom: 20},
        barWidth = (width-margin.left - margin.right)/12,barWidth2 = Math.max(40, barWidth),
        height = Math.max(margin.top + margin.bottom + wH/3*2, wH*0.8),
        y = d3.scaleLinear().domain([0, 100]).rangeRound([height - margin.top - margin.bottom, margin.top]);

        Slides_2.scroller
    .onStepEnter((response) => {
        // { element, index, direction }
        var popBar = Slides_2.slideChart.selectAll('.race-block.population');
        var deathsBar = Slides_2.slideChart.selectAll('.race-block.deaths');
        var monthBar = Slides_2.slideChart.selectAll('.race-block.month');
        var polygons = Slides_2.slideChart.selectAll('polygon');
        
        var t = d3.transition()
        .delay(500)
        .ease(d3.easeLinear);


        if (response.index == 0) {

            Slides_2.slideChart.selectAll('rect').interrupt();//transition().end();

            // hide the months bar
            App.hide(monthBar);

            // move the population bar
            popBar.interrupt().attr('transform',d=> d.pos1);

            // move the deaths bar
            deathsBar
                .interrupt()
                .attr('transform',d => d.pos1)
                .selectAll('rect').attr('width', d=> +d.data.month >0 ? barWidth : barWidth2);
            
            App.show(deathsBar);
            App.show(polygons);


            Slides_2.slideChart.selectAll('.head-text.pop tspan')
            .attr('x', 0)
            

            if (response.direction == 'up') {
                Slides_2.slideChart.selectAll('.head-text.deaths')
                .attr('transform',(d,i,el)=>{
                    return 'translate('+((width-margin.left-margin.right)/3)+',' + (margin.top - el[0].getBBox().height) + ')'
                })
                .style('text-anchor','middle');

                Slides_2.slideChart.selectAll('.head-text.pop')
                .attr('transform',(d,i,el)=>{
                    return 'translate(' + (width-margin.left-margin.right)/3*2 + ',' + (margin.top - el[0].getBBox().height) + ')'
                })
                .style('text-anchor','middle')
    
            }
            

        

        } else if (response.index == 1) {

            App.hide(polygons);

            // move the population bar
            popBar.attr('transform',d=> d.pos2)
            
            // move the death bar
            deathsBar
                .attr('transform',d=> d.pos2)
                .selectAll('rect')
                .transition(t)
                .attr('width', barWidth*10)
                .on('end', d=>{
                    App.hide(deathsBar);
                    // show the months bar
                    App.show(monthBar);
                    // Slides_2.slideChart.selectAll('.race-block.month')
                    // .classed('hidden',false)
            })

            Slides_2.slideChart.selectAll('.head-text').style('display','block')
            Slides_2.slideChart.selectAll('.head-text.deaths')
            .attr('transform',(d,i,el)=>{
                return 'translate(0,' + (margin.top - el[0].getBBox().height-15) + ')'
            })
            .style('text-anchor','start')


            Slides_2.slideChart.selectAll('.head-text.pop')
            .attr('transform',(d,i,el)=>{
                return 'translate(' + (width-margin.left-margin.right + barWidth2/2) + ',' + (margin.top - el[0].getBBox().height-15) + ')'
            })
            .style('text-anchor','end')
            
            
            Slides_2.slideChart.selectAll('text.race-value')
            .attr('y', d=> (y(d[0])- y(d[1]))/2)

        
    
        }

    })


}

Slides_3.init = function(){
    // age charts
    App.setUpSlider(Slides_3,'section.slides.set-3');
   
    // graphic setup
    
    Slides_3.scroller
    .onStepEnter((response) => {
        // { element, index, direction }

        var deathsBar = Slides_3.slideChart.selectAll('.deaths');
        var casesBar = Slides_3.slideChart.selectAll('.cases');

        if (response.index == 0) {

            App.show(deathsBar)
            App.hide(casesBar);

            this.slideChart.selectAll(".age.stronger").classed('stronger',false);

        } else if (response.index == 1) {

            App.hide(deathsBar)
            App.show(casesBar);

            this.slideChart.selectAll(".age.a20-29").classed('stronger',true);
            this.slideChart.selectAll(".age.a30-39").classed('stronger',true);
            this.slideChart.selectAll(".age.a40-49").classed('stronger',true);
            this.slideChart.selectAll(".age.a50-59").classed('stronger',true);
                    
        }

    })

}

Slides_4.init = function(){
    // age by race slides

    App.setUpSlider(Slides_4, 'section.slides.set-4');

    // graphic setup
    var width = Slides_4.slideChart.node().getBoundingClientRect().width,
        chartH = Slides_4.slideChart.select('.ai2html-insert #g-race-by-age-medium').node().getBoundingClientRect().height;
    
    Slides_4.slideChart.select('.ai2html-insert')
        .style('width',width+'px')

    Slides_4.slideChart.selectAll('.g-white-layer').classed('hidden',true);
    Slides_4.slideChart.selectAll('.g-black-layer').classed('hidden',true);



    Slides_4.scroller
    .onStepEnter((response) => {

        var whiteAnno = Slides_4.slideChart.selectAll('.g-white-layer'),
            pocAnno = Slides_4.slideChart.selectAll('.g-black-layer');
        // { element, index, direction }

        if (response.index == 0) {

            App.hide(pocAnno);
            App.show(whiteAnno);

        } else if (response.index == 1) {

            App.show(pocAnno);
            App.hide(whiteAnno);


        }

    })

}

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && this.readyState > 2);
    }
});

Slides_1.init = function(){
    var wH = App.mobile? window.visualViewport.height : window.innerHeight;
    var slideContainer = d3.select('section.slides.leading');
    var steps = slideContainer.selectAll('.step');
    var offset = Math.floor(wH*0.8)+'px';

    steps
        .style('padding-top', wH*0.2+'px')
        .style('height', wH*1.2+'px');

    this.slideChart = slideContainer.selectAll('.slides-graphic');
    this.slideAnnotation = slideContainer.selectAll('.slides-annotations');

    this.slideChart.style('height',wH+'px')
    this.slideAnnotation.style('padding-bottom',wH*0.5+'px')

    Slides_1.scroller = scrollama();
    Slides_1.scroller.setup({
        step: "section.slides.leading .step",
        // progress:true,
        offset:offset
    })
    .onStepEnter((response) => {
        // { element, index, direction }
        var mapTimeline = Slides_1.slideChart.selectAll('.small-maps');

        Slides_1.slideChart.selectAll('.graphic-slide').classed("is-active", function(d, i) {
            return i === response.index;
        });


        if (response.index>= numOfPhotoSlides) { // video show
            App.show(mapTimeline);

            var currentVidContainer = slideContainer.select('.video-container-' + (response.index+1-numOfPhotoSlides)),
            currentVid = currentVidContainer.select('video').node();

            // change map
            // slideContainer.selectAll('.video-container').classed('hidden',true);
            // currentVidContainer.classed('hidden',false);

            // autoplay
            // if (App.mobile) {
            //     currentVid.currentTime = currentVid.duration;
            // } else {
            //     currentVid.currentTime = 0;
            //     currentVid.play();
    
            // }
            if (App.mobile && !currentVid.playing) {
                currentVid.currentTime = currentVid.duration;
            } else {
                currentVid.currentTime = 0;
            }
            currentVid.play();

            //show progress bar at the bottom:
            var previousElem = mapTimeline.selectAll('.small-map')
                .filter(d=>{return d < (response.index+1- numOfPhotoSlides)})
            var progressBar = mapTimeline
                .select('.small-map-'+ (response.index+1- numOfPhotoSlides));
            var nextElem = mapTimeline.selectAll('.small-map')
                .filter(d=>{return d > (response.index+1-numOfPhotoSlides)})
    
            App.show(previousElem.selectAll('.end-num'))
            App.show(previousElem.selectAll('.end-date'));
            App.show(previousElem.selectAll('.mid-num'));
            
            previousElem.selectAll('.bar').interrupt().style('width','100%');

            App.hide(progressBar.select('.end-num'))
            App.hide(progressBar.select('.mid-num'))
            App.hide(progressBar.select('.end-date'))

            progressBar.select('.bar')
                .style('width',0)
                .transition().duration(currentVid.duration? currentVid.duration*1000: 2500)
                .style('width','100%')
                .on('end', ()=>{
                    App.show(progressBar.select('.end-num'))
                    App.show(progressBar.select('.mid-num'))
                    App.show(progressBar.select('.end-date'))
                })


            App.hide(nextElem.selectAll('.end-num'))
            App.hide(nextElem.selectAll('.mid-num'))
            App.hide(nextElem.selectAll('.end-date'))
            nextElem.select('.bar').interrupt().style('width',0);
        



        } else {
            App.hide(Slides_1.slideChart.selectAll('.small-maps'))
        }
    })
    .onStepExit((response) => {})
    // .onStepProgress(function(response){ 
        // { element: DOMElement, index: number, progress: number }
        // var oneToZero = Math.max(0,1-(Math.max(response.progress-0.55,0))*4); 
        // if (response.index == 0) {
            // slideContainer.select('.is-active').select('img').style('opacity',oneToZero)

        // } else if (response.index == numOfPhotoSlides-1) {
            // slideContainer.select('.is-active').select('img').style('opacity',oneToZero)
        // }

    // })

}

window.mobileCheck = function() {
    //for both mobile and tablet
    // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser 

    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;

    // let check = false;
    // (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    // return check;
  };

App.resize = function(){

    var wH = App.mobile? window.visualViewport.height : window.innerHeight, 
    wW =window.innerWidth;

    // resize Slides_1
    var width = Slides_1.slideChart.select('.video-container').node().getBoundingClientRect().width;
    width = (width/1968*1250+ 180 > wH) ? (wH-180)/1250*1968 : width;


    Slides_1.slideChart.style('height',wH+'px')
    Slides_1.slideChart.selectAll('div.video-container')
        .style('width',width+'px')
        .style('left', (wW - width)/2 + 'px')
        .style('height',(width/1968*1250-width/1968*15)+'px')
        .style('top',(wH - 35-28-(width/1968*1250-width/1968*15))/2 + 'px')
    
    Slides_1.scroller.resize();
    // setup resize event
    // if (!App.mobile) {
        App.resizeImg();
    // }


    // resize Slides_2
    Slides_2.scroller.resize();
    Slides_3.scroller.resize();

    if (!App.mobile) {
        App.addRaceGraphic();
        App.addAgeGraphic();
    }

    Slides_4.scroller.resize();


    // resize static graphics
    App.resizeStaticGraphic();

}



App.initSlides = function(){
    App.addRaceGraphic();
    App.addAgeGraphic();

    Slides_1.init();
    Slides_2.init();
    Slides_3.init();
    Slides_4.init();

}

function wrap(text, width) {
	text.each(function() {
	  var text = d3.select(this),
		  words = text.text().split(/\s+/).reverse(),
		  word,
		  line = [],
		  lineNumber = 0,
		  lineHeight = 1.3, // ems
		  y = text.attr("y"),
		  dy = parseFloat(text.attr("dy")),
		  tspan = text.text(null)
			  .append("tspan")
			  .attr("x", 0)
			  .attr("y", y)
			  .attr("dy", dy + "em");
  
	  while (word = words.pop()) {
		line.push(word);
		tspan.text(line.join(" "));
		if (tspan.node().getComputedTextLength() > width) {
		  line.pop();
		  tspan.text(line.join(" "));
		  line = [word];
		  lineNumber = lineNumber +1;
		  tspan = text.append("tspan").attr("x", 0).attr("y", +lineNumber * lineHeight + "em").text(word);
		}
	  }
	});
  }
  


// Bind on-load handler
document.addEventListener("DOMContentLoaded", function () {
    App.init();
    window.addEventListener("resize", App.resize, true);

});

