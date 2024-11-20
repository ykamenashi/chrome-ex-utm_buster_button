const utm = /utm_source/;
if( utm.test(location.href) ){
    let answer_for_removing = window.confirm('OOPS! utm_source is here. remove it?')
    if ( answer_for_removing ){
        const newURL = location.href.split('?')[0];
        location.href = newURL;
    }
}
