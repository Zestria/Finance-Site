import Layout from '../../components/Layout'
import Aside_news from '../../components/Aside_news'
import News_details from '../../components/News_details'
import Trending_tickers from '../../components/Trending_tickers'

import { key } from '../../key'

const News_details_page = (/*{ articleData, littletickersData }*/) => {
    //console.log(articleData)
    const deletingSthUseless = str => { 
        let output = str
        if(str.match('data-src')) {
            output = output.replace('data-src', 'src') // replace attributes: data-src to src in <img /> tags
            output = deletingSthUseless(output)
        }
        if(str.match('src=""')) {
            output = output.replace('src=""', '') // removing empty src
            output = deletingSthUseless(output)
        }
        if(str.match('caas-img-loader')) {
            output = output.replace('caas-img-loader', '') // remove caas-img-loader
            output = deletingSthUseless(output)
        }
        if(str.match("caas-img")) {
            output = output.replace('caas-img', '') // remove caas-img
            output = deletingSthUseless(output)
        }
        return output
    }
/*
    let content = articleData.data.contents[0].content

    let markup = content.body.markup; // markup of original article
    let styleTag = markup.slice(markup.indexOf('<style>')+7, markup.indexOf('</style>')) // Crop <style>/* css code </style> from markup and add this to Layout component
    
    let markupArticle = markup.slice(markup.indexOf('<article'), markup.indexOf('</article>')) // For divTag variable
    let markupTxt = deletingSthUseless(markupArticle.slice(markupArticle.indexOf('<div class="caas-body">')+23, markupArticle.lastIndexOf('</div>')))
*/   
    const pad = (number, length) => {
        let str = "" + number
        while (str.length < length) {
            str = '0'+str
        }
        return str
    }
    let offset = new Date().getTimezoneOffset()
    offset = ((offset<0? '+':'-')+ // Note the reversed sign!
        pad(parseInt(Math.abs(offset/60)), 2)+
        pad(Math.abs(offset%60), 2))
    

    let markupTxt = `<p>Long after this year&#39;s tax season ends, the dreaded words <em>IRS audit</em> mean a headache is on the way for many U.S. taxpayers.</p><p>Typically, the tax agency will audit less than 1% of all tax returns. But even 0.5% is still one out of every 200 taxpayers, which might have you sweating over your chances of being audited.</p><p>But being chosen for an audit is more than a game of chance, and you’re less likely to attract attention from the IRS if you watch out for common red flags when you’re <a href="https://moneywise.com/a/tax-season-has-arrived?utm_source=syn_oath_mon&amp;utm_campaign=15640&amp;utm_content=15640_filing+your+taxes+this+season." rel="nofollow noopener" target="_blank" data-ylk="slk:filing your taxes this season." class="link rapid-noclick-resp">filing your taxes this season.</a></p><div class="caas-da"><div id="defaultLREC"><div class="caas-da-loader"><i></i></div></div></div><p>Here are 12 to look out for.</p><p>First, let’s look at some <strong>red flags that <em>can’t</em> be avoided</strong>.</p><h2>1. Making a lot of money</h2><p>The stats don’t lie — the more money you make, the more likely an audit is coming your way.</p><p>“Despite common misperceptions about IRS examination rates, the reality is that the likelihood of an audit significantly increases as income grows,” says IRS Deputy Commissioner Sunita Lough.</p><p>That doesn’t mean low-income workers can coast during tax time, but just prepared for extra scrutiny with a higher income.</p><p>The IRS says typical audits for higher-income taxpayers involve at least three different tax years, and could take years to resolve. So if you’re in that group, take extra care when filing your taxes, and consider getting some help from <a href="https://moneywise.com/a/best-tax-software?utm_source=syn_oath_mon&amp;utm_campaign=15640&amp;utm_content=15640_tax+experts" rel="nofollow noopener" target="_blank" data-ylk="slk:tax experts" class="link rapid-noclick-resp">tax experts</a>.</p><h2>2. Running a business</h2><figure class="caas-figure"><div class="caas-figure-with-pb" style="max-height: 266.6666666666667px"><null class="caas-img-fullbleed-container"><div class="caas-img-container caas-img-loader" style="padding-bottom:42%;"><img class="caas-img caas-lazy has-preview" alt="A young woman standing behind the counter in a coffee shop" src="" src="https://s.yimg.com/ny/api/res/1.2/edznjHbUFRlyrkA_J9CSUA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/VS3CtxjyjkrRbvRRnGvR3A--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/5f3f90e40518a18248a40163cb2fd822"><noscript><img alt="A young woman standing behind the counter in a coffee shop" src="https://s.yimg.com/ny/api/res/1.2/edznjHbUFRlyrkA_J9CSUA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/VS3CtxjyjkrRbvRRnGvR3A--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/5f3f90e40518a18248a40163cb2fd822" class="caas-img"></noscript></div></null></div><figcaption class="caption-collapse caption-aligned-with-image" style="max-width:640px;"><cite>mavo / Shutterstock</cite></figcaption></figure><p>This might seem unfair. If running a business wasn’t already difficult enough during the COVID-19 pandemic, now you have to worry about getting audited too.</p><p>But just ask any business owner about the paperwork involved — there are a few things you could miss when you do your taxes, so the IRS is going to bring its magnifying glass to your return.</p><p>Schedule C, the tax form that sole proprietors will fill out, has a ton of deductions for self-employed people. But the tax agency knows from experience that deductions can occasionally go overboard.</p><h2>3. High itemized deductions</h2><figure class="caas-figure"><div class="caas-figure-with-pb" style="max-height: 266.6666666666667px"><null class="caas-img-fullbleed-container"><div class="caas-img-container caas-img-loader" style="padding-bottom:42%;"><img class="caas-img caas-lazy has-preview" alt="Tax deductions written on a paper." src="" src="https://s.yimg.com/ny/api/res/1.2/jytrrEiyXp6Z85N29R1Ktw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/JqIXyqAIb4aEtfk.JYxIYA--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/f628b1690f6686bc9d4680cc1b4c10f9"><noscript><img alt="Tax deductions written on a paper." src="https://s.yimg.com/ny/api/res/1.2/jytrrEiyXp6Z85N29R1Ktw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/JqIXyqAIb4aEtfk.JYxIYA--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/f628b1690f6686bc9d4680cc1b4c10f9" class="caas-img"></noscript></div></null></div><figcaption class="caption-collapse caption-aligned-with-image" style="max-width:640px;"><cite>Vitalii Vodolazskyi / Shutterstock</cite></figcaption></figure><p>When you’re filing your taxes, you have two choices: Itemize your deductions and list them out one by one, or take the simplified standard deduction.</p><p>Deductions decrease your taxable income and help lower your tax bill, and after a 2017 tax law nearly doubled the standard deduction amounts, most U.S. households opt for that route.</p><p>But, some taxpayers have lots of legally allowable deductions for qualifying expenses, and will itemize them instead. A super-high itemized deduction will open some eyes down at the tax agency. Just make sure you have all your documentation on hand to support your tax return.</p><h2>4. Large charitable donations</h2><figure class="caas-figure"><div class="caas-figure-with-pb" style="max-height: 266.6666666666667px"><null class="caas-img-fullbleed-container"><div class="caas-img-container caas-img-loader" style="padding-bottom:42%;"><img class="caas-img caas-lazy has-preview" alt="A money bag with the word Donation and a red heart. Accumulation of money for a medical donation. Health care. Saving. Social medical help from volunteers. Charitable foundation" src="" src="https://s.yimg.com/ny/api/res/1.2/HqtOYOYaA0ewq5R7G9ryog--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/6XQB5wcUf9RTEzi3Id72VQ--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/b403f61d3339c595056ee480112314e1"><noscript><img alt="A money bag with the word Donation and a red heart. Accumulation of money for a medical donation. Health care. Saving. Social medical help from volunteers. Charitable foundation" src="https://s.yimg.com/ny/api/res/1.2/HqtOYOYaA0ewq5R7G9ryog--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/6XQB5wcUf9RTEzi3Id72VQ--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/b403f61d3339c595056ee480112314e1" class="caas-img"></noscript></div></null></div><figcaption class="caption-collapse caption-aligned-with-image" style="max-width:640px;"><cite>Andrii Yalanskyi / Shutterstock</cite></figcaption></figure><p>There are plenty of causes that need the help this year, and it doesn’t hurt that you can write-off that good deed, too.</p><p>But if your charitable donation is astonishingly high compared to your income, it’s a red flag for the IRS. The agency t knows what the average charitable donation is for each income level.</p><p>If your adjusted gross income is $75,000, the average yearly charitable donation is a bit higher than $3,000. If you donate, say $10,000 in a single year, expect a higher chance of you’ll hear from the IRS.</p><p>As part of this year’s <a href="https://moneywise.com/a/here-are-the-biggest-tax-changes-for-2021?utm_source=syn_oath_mon&amp;utm_campaign=15640&amp;utm_content=15640_new+tax+changes" rel="nofollow noopener" target="_blank" data-ylk="slk:new tax changes" class="link rapid-noclick-resp">new tax changes</a>, the agency is actually making it easier to get your tax break for donations, with a write off up to $300 in cash contributions to charity, even if you take the standard deduction.</p><h2>5. Dealing in cryptocurrency</h2><figure class="caas-figure"><div class="caas-figure-with-pb" style="max-height: 266.6666666666667px"><null class="caas-img-fullbleed-container"><div class="caas-img-container caas-img-loader" style="padding-bottom:42%;"><img class="caas-img caas-lazy has-preview" alt="Crypto currency background with various of shiny silver and golden physical cryptocurrencies symbol coins, Bitcoin, Ethereum, Litecoin, zcash, ripple." src="" src="https://s.yimg.com/ny/api/res/1.2/yNFY9UwDALJ3bgqeYlc9.w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/J0QSBD3g9RI91iVEF4RiQw--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/d117d98a95fbd970dd272b2a6fb759fa"><noscript><img alt="Crypto currency background with various of shiny silver and golden physical cryptocurrencies symbol coins, Bitcoin, Ethereum, Litecoin, zcash, ripple." src="https://s.yimg.com/ny/api/res/1.2/yNFY9UwDALJ3bgqeYlc9.w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/J0QSBD3g9RI91iVEF4RiQw--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/d117d98a95fbd970dd272b2a6fb759fa" class="caas-img"></noscript></div></null></div><figcaption class="caption-collapse caption-aligned-with-image" style="max-width:640px;"><cite>eamesBot / Shutterstock</cite></figcaption></figure><p>If you’re into <a href="https://moneywise.com/a/if-youve-got-some-extra-cash-heres-how-to-invest-it-for-free?utm_source=syn_oath_mon&amp;utm_campaign=15640&amp;utm_content=15640_buying+and+selling+Bitcoin" rel="nofollow noopener" target="_blank" data-ylk="slk:buying and selling Bitcoin" class="link rapid-noclick-resp">buying and selling Bitcoin</a> and other digital currencies, the IRS wants to know.</p><p>In 2019, the agency bese
    nding thousands of letters to cryptocurrency holders, warning them they may have broken federal tax laws.</p><p>The tax rules treat Bitcoin and other cryptocurrencies as property for tax purposes, and have published a set of <a href="https://www.irs.gov/individuals/international-taxpayers/frequently-asked-questions-on-virtual-currency-transactions" rel="nofollow noopener" target="_blank" data-ylk="slk:FAQs" class="link rapid-noclick-resp">FAQs</a> to help you file properly.</p><h2>6. Cash transactions</h2><figure class="caas-figure"><div class="caas-figure-with-pb" style="max-height: 266.6666666666667px"><null class="caas-img-fullbleed-container"><div class="caas-img-container caas-img-loader" style="padding-bottom:42%;"><img class="caas-img caas-lazy has-preview" alt="Human hands exchanging money - closeup shot" src="" src="https://s.yimg.com/ny/api/res/1.2/Qa7JFvGNkMMi2EfkcBuW.A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/1EYml0VBjAfFUm6551Y_bg--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/3ca11c7e842f30a60a1c0aebe857fb5f"><noscript><img alt="Human hands exchanging money - closeup shot" src="https://s.yimg.com/ny/api/res/1.2/Qa7JFvGNkMMi2EfkcBuW.A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/1EYml0VBjAfFUm6551Y_bg--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/3ca11c7e842f30a60a1c0aebe857fb5f" class="caas-img"></noscript></div></null></div><figcaption class="caption-collapse caption-aligned-with-image" style="max-width:640px;"><cite>Maryna Pleshkun / Shutterstock</cite></figcaption></figure><p>The tax man may come knocking simply because you work in a certain industry. Cash businesses, like restaurants, lawn care and laundromats, are more likely to be audited because of how difficult it is to verify income received in cash.</p><p>Try to document your business transactions as much as you can. If the IRS does come calling, they’ll want to confirm that your lifestyle is supported by your declared income.</p><p>Speaking of cash transactions, any business that receives more than $10,000 in cash in a single transaction has to send a form to the IRS. So, if you’re making it rain at pawn shops, car dealers or casinos, be prepared for some added scrutiny.</p><p>Next, these (likely) errors are also going to invite attention from the IRS. Here are <strong>six red flags that <em>can</em> be avoided</strong>.</p><h2>1. Incorrectly reporting the health premium tax credit</h2><figure class="caas-figure"><div class="caas-figure-with-pb" style="max-height: 266.6666666666667px"><null class="caas-img-fullbleed-container"><div class="caas-img-container caas-img-loader" style="padding-bottom:42%;"><img class="caas-img caas-lazy has-preview" alt="Male doctor discussing reports with patient at desk in medical office" src="" src="https://s.yimg.com/ny/api/res/1.2/vThybMScAyBOknwUgWmMQg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/WLNJc_tIML018KGSew6BoQ--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/23bd442efb860149017fe8e7fa0c3950"><noscript><img alt="Male doctor discussing reports with patient at desk in medical office" src="https://s.yimg.com/ny/api/res/1.2/vThybMScAyBOknwUgWmMQg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/WLNJc_tIML018KGSew6BoQ--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/23bd442efb860149017fe8e7fa0c3950" class="caas-img"></noscript></div></null></div><figcaption class="caption-collapse caption-aligned-with-image" style="max-width:640px;"><cite>lightwavemedia / Shutterstock</cite></figcaption></figure><p>If you can’t get affordable health coverage through your employer, and you’re not eligible for Medicare, Medicaid or other federal insurance, you could get a handy tax credit when you buy insurance through a marketplace like <a href="https://www.healthcare.gov/" rel="nofollow noopener" target="_blank" data-ylk="slk:healthcare.gov" class="link rapid-noclick-resp">healthcare.gov</a>.</p><p>You can choose to have the credit paid in advance to the insurance company to lower your monthly payments, and then complete the necessary paperwork when you file your taxes.</p><p>If you forget to report that subsidy, or you claim it even though you’re above the income threshold, you may get extra IRS attention.</p><p>It might help to shop around and <a href="https://moneywise.com/a/how-to-find-cheap-health-insurance?utm_source=syn_oath_mon&amp;utm_campaign=15640&amp;utm_content=15640_compare+rates" rel="nofollow noopener" target="_blank" data-ylk="slk:compare rates" class="link rapid-noclick-resp">compare rates</a> from health insurance companies.</p><h2>2. Failing to report a foreign bank account</h2><p>If you’re an American taxpayer stashing some of your money outside the U.S., the tax man will eventually find out.</p><p>You&#39;re better off reporting your money before The IRS come looking. Failure to report your foreign bank account can lead to severe penalties.</p><p>Just make sure you file a <a href="https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar" rel="nofollow noopener" target="_blank" data-ylk="slk:Report of Foreign Bank and Financial Accounts" class="link rapid-noclick-resp">Report of Foreign Bank and Financial Accounts</a> (FBAR) by deadline day.</p><h2>3. 100% business use of a vehicle</h2><figure class="caas-figure"><div class="caas-figure-with-pb" style="max-height: 266.6666666666667px"><null class="caas-img-fullbleed-container"><div class="caas-img-container caas-img-loader" style="padding-bottom:42%;"><img class="caas-img caas-lazy has-preview" alt="Young businessman using cell phone in convertible near private jet" src="" src="https://s.yimg.com/ny/api/res/1.2/NQlQfkBSGrLMaVUX7MzKdw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/.8EMRcFkzCxJo.NICZc.MA--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/91d7e564e7e732f646b4dcca82d75ef9"><noscript><img alt="Young businessman using cell phone in convertible near private jet" src="https://s.yimg.com/ny/api/res/1.2/NQlQfkBSGrLMaVUX7MzKdw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/.8EMRcFkzCxJo.NICZc.MA--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/91d7e564e7e732f646b4dcca82d75ef9" class="caas-img"></noscript></div></null></div><figcaption class="caption-collapse caption-aligned-with-image" style="max-width:640px;"><cite>sirtravelalot / Shutterstock</cite></figcaption></figure><p>Business owners can list the depreciation of their car and the percentage of its business use for the year.</p><p>But claiming that 100% of the use of your vehicle is for business is a major red flag. Have you <em>really</em> never used that car for anything but business?</p><p>If you want to save extra cash on your car legitimately, check to see if you’re paying too much for insurance. If you haven’t <a href="https://moneywise.com/a/overpaying-for-car-insurance?utm_source=syn_oath_mon&amp;utm_campaign=15640&amp;utm_content=15640_shopped+around+for+rates" rel="nofollow noopener" target="_blank" data-ylk="slk:shopped around for rates" class="link rapid-noclick-resp">shopped around for rates</a> lately, you may be paying $1,100 more than you have to.</p><h2>4. Claiming the home office deduction</h2><figure class="caas-figure"><div class="caas-figure-with-pb" style="max-height: 266.6666666666667px"><null class="caas-img-fullbleed-container"><div class="caas-img-container caas-img-loader" style="padding-bottom:42%;"><img class="caas-img caas-lazy has-preview" alt="Businesswoman looking through window with her dog in home office . Businesswoman in thirties concept" src="" src="https://s.yimg.com/ny/api/res/1.2/EAJzlR_jbSMMhnFyM6HGEg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/CJm228PQxR0y2tRVICwbsw--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/339d6f8ffcb083ab1b7f4a293800d313"><noscript><img alt="Businesswoman looking through window with her dog in home office . Businesswoman in thirties concept" src="https://s.yimg.com/ny/api/res/1.2/EAJzlR_jbSMMhnFyM6HGEg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/CJm228PQxR0y2tRVICwbsw--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/339d6f8ffcb083ab1b7f4a293800d313" class="caas-img"></noscript></div></null></div><figcaption class="caption-collapse caption-aligned-with-image" style="max-width:640px;"><cite>Milan Ilic Photographer / Shutterstock</cite></figcaption></figure><p>It’s time to finally expense all those new home office products you bought last year, right?</p><p>Even though the pandemic forced more people than ever to work from home in 2020, most won’t be able to claim the home office deduction.</p><p>To save some money on those expenses, try a <a href="https://moneywise.com/a/shopping-online-find-better-deals?utm_source=syn_oath_mon&amp;utm_campaign=15640&amp;utm_content=15640_free+browser+extension" rel="nofollow noopener" target="_blank" data-ylk="slk:free browser extension" class="link rapid-noclick-resp">free browser extension</a> to compare prices and ensure you’re getting the best deals.</p><p>Prior to 2018, some employees could write off home expenses if they went for itemized deductions. Now, the benefit is only available to self-employed people or independent contractors who use a space in their home exclusively for business.</p><p>Even if you are eligible for this write off, you need to calculate what percentage of your home was used for business, and the IRS will flag your return if that number looks suspicious to
    them.</p><h2>5. Taking an early payout from retirement accounts</h2><figure class="caas-figure"><div class="caas-figure-with-pb" style="max-height: 266.6666666666667px"><null class="caas-img-fullbleed-container"><div class="caas-img-container caas-img-loader" style="padding-bottom:42%;"><img class="caas-img caas-lazy has-preview" alt="Nest with money and egg with IRA on it" src="" src="https://s.yimg.com/ny/api/res/1.2/VTK0rMfft19AY8P4EZp2dw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/GOrhIfobEAkItsNUy2P6Gw--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/0894b86a496979ac3175336ff3f8c42c"><noscript><img alt="Nest with money and egg with IRA on it" src="https://s.yimg.com/ny/api/res/1.2/VTK0rMfft19AY8P4EZp2dw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/GOrhIfobEAkItsNUy2P6Gw--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/0894b86a496979ac3175336ff3f8c42c" class="caas-img"></noscript></div></null></div><figcaption class="caption-collapse caption-aligned-with-image" style="max-width:640px;"><cite>Don Mammoser / Shutterstock</cite></figcaption></figure><p>All that money you’re paying into your traditional IRA or 401(k)? Technically you don’t need to wait until you’re retired before you start withdrawing.</p><p>But if you do decide to make some withdrawals before the age of 59 1/2, there are some tax implications. You’ll pay a 10% penalty on top of regular income tax unless you qualify for an exemption, such as using your IRA to buy your first home.</p><p>The IRS is on the lookout for taxpayers who don’tt actually qualify for those exemptions.</p><p>Creating a strategy for your retirement accounts isn’t always simple. You may consider talking to a <a href="https://moneywise.com/a/get-your-retirement-plan-back-on-track?utm_source=syn_oath_mon&amp;utm_campaign=15640&amp;utm_content=15640_certified+financial+planner" rel="nofollow noopener" target="_blank" data-ylk="slk:certified financial planner" class="link rapid-noclick-resp">certified financial planner</a> (CFP) who can help you make a personalized plan.</p><h2>6. Nonfilers</h2><figure class="caas-figure"><div class="caas-figure-with-pb" style="max-height: 266.6666666666667px"><null class="caas-img-fullbleed-container"><div class="caas-img-container caas-img-loader" style="padding-bottom:42%;"><img class="caas-img caas-lazy has-preview" alt="Nervous businessman peeking over desk in his office" src="" src="https://s.yimg.com/ny/api/res/1.2/NLPZRAYn2IqwKCrqNTqcZg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/eJkY.AGrAnVKPv7sXtDs4g--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/c3d2d3e60efe2e0057254b2bee863c78"><noscript><img alt="Nervous businessman peeking over desk in his office" src="https://s.yimg.com/ny/api/res/1.2/NLPZRAYn2IqwKCrqNTqcZg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI2Ni42NjY2NjY2NjY2NjY3/https://s.yimg.com/uu/api/res/1.2/eJkY.AGrAnVKPv7sXtDs4g--~B/aD01MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/moneywise_327/c3d2d3e60efe2e0057254b2bee863c78" class="caas-img"></noscript></div></null></div><figcaption class="caption-collapse caption-aligned-with-image" style="max-width:640px;"><cite>wavebreakmedia / Shutterstock</cite></figcaption></figure><p>This might seem obvious: If you don’t even bother filing an income tax return, the IRS is going to raise an eyebrow.</p><p>But the IRS has been having a hard time keeping up with people who do not file tax returns — and it’s high-income nonfilers who are causing the most trouble. The Treasury Inspector General for Tax Administration released a report in 2020 that highlights tax money being left on the table by not pursuing nonfilers and set out recommendations to help the IRS to bridge that tax gap.</p><p>That means that even if you’re not a high-earner, the tax agency may take nonfilers a bit more seriously this year.</p><p>If it’s your first time, check out our <a href="https://moneywise.com/a/how-to-file-taxes-for-the-first-time?utm_source=syn_oath_mon&amp;utm_campaign=15640&amp;utm_content=15640_guide+on+filing+your+taxes" rel="nofollow noopener" target="_blank" data-ylk="slk:guide on filing your taxes" class="link rapid-noclick-resp">guide on filing your taxes</a>. The process might be confusing at first, but getting audited is <em>way</em> more complicated.</p>`
    let content = {
        title: 'Oil Jumps Above $71 After Key Saudi Crude Terminal Attacked',
        id: 'news-001',
        provider: { displayName: 'Finance Yahoo' },
        authors: ['Vyacheslav Davletshin'],
        body: { data: { partnerData: { cover: { image: { originalUrl: 'https://source.unsplash.com/random' } } } } }
    }
    const littletickersData = {
        finance: {
            result: [{
                quotes: [
                    {
                        symbol: 'AMZN',
                        regularMarketChange: -129.92304,
                        regularMarketPrice: 2947.29484,
                        regularMarketChangePercent: -10.23849,
                        shortName: 'Amazon.com'
                    },
                    {
                        symbol: 'TSLA',
                        regularMarketChange: 48.304,
                        regularMarketPrice: 762.284,
                        regularMarketChangePercent: 6.849,
                        shortName: 'Tesla Inc'
                    },
                    {
                        symbol: 'AMZN',
                        regularMarketChange: -129.92304,
                        regularMarketPrice: 2947.29484,
                        regularMarketChangePercent: -10.23849,
                        shortName: 'Amazon.com'
                    },
                    {
                        symbol: 'TSLA',
                        regularMarketChange: 48.304,
                        regularMarketPrice: 762.284,
                        regularMarketChangePercent: 6.849,
                        shortName: 'Tesla Inc'
                    },
                    {
                        symbol: 'AMZN',
                        regularMarketChange: -129.92304,
                        regularMarketPrice: 2947.29484,
                        regularMarketChangePercent: -10.23849,
                        shortName: 'Amazon.com'
                    },
                    {
                        symbol: 'TSLA',
                        regularMarketChange: 48.304,
                        regularMarketPrice: 762.284,
                        regularMarketChangePercent: 6.849,
                        shortName: 'Tesla Inc'
                    }
                ]  
            }]
        }
    }

    const article = {
        markup: markupTxt,
        title: content.title,
        id: content.id,
        img: content.body.data.partnerData.cover.image.originalUrl,
        brand: content.provider.displayName,
        authors: content.authors // array
    }

    const trending_tickers = littletickersData.finance.result[0].quotes // array

    console.log(article)
    return (
        <Layout>
            <div className="page_container">
                <div className="aside_column">
                    <h1 className="aside_header">{article.title}</h1>
                </div>
                <div className="vertical_line left"></div>
                <News_details article={article} offset={offset} />
                <div className="vertical_line right"></div>
                <div className="aside_column">
                    <Trending_tickers trending_tickers={trending_tickers} />
                </div>
            </div>
        </Layout>
    )
}

export default News_details_page
/*
export const getServerSideProps = async ({ params }) => {
    const resArticle = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details?uuid=${params.id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    const articleData = await resArticle.json()
    const resLittletickers = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    const littletickersData = await resLittletickers.json()
    
    return { props: { articleData, littletickersData } }

}*/

// router.back() <---- to go backя
// router.reload() <---- to reload
// let test01 = divTag.slice(divTag.indexOf('<div class="caas-da">'), divTag.length-1) // For removing useless div.cass-da container
// let test02 = test01.slice(0, test01.indexOf('<p>')) // For removing useless div.cass-da container