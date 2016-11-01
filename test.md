# 人工知能と社会メモ　2016.10.26  
### 前回までの資料
## この講義の説明
[シラバス](syllabus.pdf)

 シラバスでは、大幅に内容が変わる場合があると書いているが、結果としては、それほど変わらないことになった。

 一つの項目として独立させていたＩＢＭの人工知能を、「「知能」の意味」、という項目に入れてしまい。他方で、新たに、「米国のＡＩ産業の現状と日本の状況」,「当たり前の社会インフラとしてのＡＩへ」を追加した。

 実は、シラバスを書いていたときにもっていた、AIと労働の未来、米国のAI産業の状況への認識は、RIETI（独立行政法人経済産業研究所）のプロジェクトの調査で大きく変わったが、項目は、さほど変える必要はなかった。

 次のような項目を講義する：
- 入門１：AIとは？-AIの種類-  
- 入門２：映画、文芸作品にみるAI  
- 入門３：人工知能の歴史と現在の人工知能ブーム  
- 人工知能論：ドレファス・ヴィノグラードのAI不可能諭  
- 「知能」の意味：イライザ、IBM Deep Blue, Watson, 東ロボくん、AlphaGo などを例に。
- 機械が仕事を奪う？：日本で見過ごされた米国における機械脅威論  
- 米国のＡＩ産業の現状と日本の状況
[Cloud AI (machine learning)](https://cloud.google.com/blog/big-data/2016/08/how-a-japanese-cucumber-farmer-is-using-deep-learning-and-tensorflow)
- AIとITの社会インパクト-未来の労働はどう変わる？- 
###  
## 本当は多種多量なAI
[John McCarthy](https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist))
[A.I.　という題名のハリウッド映画](https://ja.wikipedia.org/wiki/A.I.)
[＊](https://www.google.co.jp/imgres?imgurl=http://www.gstatic.com/tv/thumb/movieposters/27945/p27945_p_v8_ae.jpg&imgrefurl=http://google.com/search%3Ftbm%3Disch%26q%3DArtificial%2520Intelligence:%2520AI&h=1440&w=960&tbnid=dpc6LxYov4HkEM:&tbnh=186&tbnw=124&docid=e0Dkmk--xJMV9M&itg=1&usg=__p07U7VE_YUjjVHp0WY3qEma2eek=&sa=X&sqi=2&ved=0ahUKEwjq0uDMwNTPAhXMo5QKHRjWDvkQ_B0IbjAK&ei=NMb9V-roBMzH0gSYrLvIDw)
[アンドリューNDR114](https://ja.wikipedia.org/wiki/アンドリューNDR114)
[＊](https://www.google.co.jp/imgres?imgurl=http://iwiz-movies.c.yimg.jp/c/movies/pict/p/p/15/0b/134592_01.jpg&imgrefurl=http://movies.yahoo.co.jp/movie/%25E3%2582%25A2%25E3%2583%25B3%25E3%2583%2589%25E3%2583%25AA%25E3%2583%25A5%25E3%2583%25BCNDR114/160134/&h=779&w=550&tbnid=lvbtrWYYN8sriM:&tbnh=186&tbnw=131&docid=BVbt4Co-Y2Sg7M&itg=1&usg=__WQ73R0t8Lo3YsEJTrH1YIjOuBII=&sa=X&ved=0ahUKEwiKjc_bwNTPAhXFjZQKHfvlAt4Q_B0IgQEwCg&ei=U8b9V8qXD8Wb0gT7y4vwDQ)
[トランセンデンス](https://ja.wikipedia.org/wiki/トランセンデンス)
[＊](http://www.cinemacafe.net/special/5777/recent/SPECIAL%EF%BC%9A%E3%80%8E%E3%83%88%E3%83%A9%E3%83%B3%E3%82%BB%E3%83%B3%E3%83%87%E3%83%B3%E3%82%B9%E3%80%8F)
[アイ　ロボット](https://ja.wikipedia.org/wiki/アイ,ロボット)
[＊](https://www.google.co.jp/imgres?imgurl=http://iwiz-movies.c.yimg.jp/c/movies/pict/p/p/90/78/142272_01.jpg&imgrefurl=http://movies.yahoo.co.jp/movie/%25E3%2582%25A2%25E3%2582%25A4%25EF%25BC%258C%25E3%2583%25AD%25E3%2583%259C%25E3%2583%2583%25E3%2583%2588/320063/&h=777&w=550&tbnid=ncugEt9wCNHreM:&tbnh=186&tbnw=131&docid=hc2DxyHcL7MJZM&itg=1&usg=__8EzoJE39AYscfZvoXdNEEqG8Awo=&sa=X&ved=0ahUKEwiAvZrjv9TPAhVDF5QKHXqNDywQ_B0IgQEwCg&ei=VsX9V4C6LMOu0AT6mr7gAg)
[Her](https://www.google.co.jp/imgres?imgurl=http://image.eiga.k-img.com/images/movie/79523/poster.jpg?1400079600&imgrefurl=http://eiga.com/movie/79523/&h=453&w=320&tbnid=reT1Ou2HkWwlNM:&tbnh=186&tbnw=131&docid=VEJYGJPRqrg0MM&itg=1&usg=__IOXftoiqumzQ2Gor3vyWaG8M4PM=&sa=X&ved=0ahUKEwiQ8Nr8wNTPAhVCKpQKHYnOAtEQ_B0IfzAK&ei=mMb9V5DEJ8LU0ASJnYuIDQ)

 しかし、これは大きな間違いである。現在、日本で話題になっているAIに、IBM Watson, AlphaGo, 東ロボ君、があるが、例えば、この三つは共通する部分もあるものの、本質的に異なる技術を使っている。つまり、ひとくくりに、人工知能、AIということはできない。
[人の顔の位置を認識して、その周りに四角い枠を出す](https://www.google.co.jp/search?q=%E7%94%9F%E4%BD%93%E8%AA%8D%E8%A8%BC&biw=1784&bih=902&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwjQvNP5xtTPAhWnh1QKHciuACwQ_AUIBygC#tbm=isch&q=%E3%83%87%E3%82%B8%E3%82%AB%E3%83%A1+%E9%A1%94%E8%AA%8D%E8%AD%98)
[生体認証](https://www.google.co.jp/search?q=生体認証&biw=1784&bih=902&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwjQvNP5xtTPAhWnh1QKHciuACwQ_AUIBygC)
[As soon as it works, no one calls it AI any more.](https://proftomcrick.com/tag/john-mccarthy/)

 しかし、そうすると、上に三つ書いた有名なAIの内、IBM Watson と、東ロボ君は、非常にアルゴリズム的なので、AIでないともいえる。しかし、この双方は、自然言語（英語、日本語）の文章を機械が自動で認識するという自然言語認識が使われていて、これはAIだと思われている。しかし、この双方とも、その部分は、ツールとしてつかっているだけで、その本体部分ではない。そう考えると、これらをAIと呼ぶのは疑問にも思える。

 実際、IBMは、WatsonをAIとは呼ばず、自社の、その様な技術をAIと差別化して、Cognitive Computing と呼んでいる。
[IBM コグニティブ・コンピューティングのイメージ](http://www.ibm.com/smarterplanet/jp/ja/ibmwatson/cognitive-computing-movies/)
[この本](https://www.amazon.co.jp/コンピュータが仕事を奪う-新井-紀子/dp/4532316707)

 人工知能と社会の関係を考えるとき、人工知能＝人のように考える機械、という単純な図式で物事を考えると大きな間違いを犯すこととなる。現在の日本でのAIブームを見ていると、これに陥っているのではないかと思える人や記事、TV番組などが、かなり見かける。

 そこで、AIについて、考える第一歩として、AIには、実は、多種多様な種類、タイプがあることを知ることから始める。
## AIのタイプ

 ディープラーニング、深層学習という言葉を聞くことがあると思う。これは機械学習と呼ばれるAIの一分野の話。ただ、機械学習の専門家は、それを、あまり人工知能と呼ばなかったりするが、これは人工知能学会の重要な分野の一つだから、まぎれもない人工知能だろう。
[Apple の Siri ](http://www.apple.com/jp/ios/siri/)
[＊](https://ja.wikipedia.org/wiki/Siri)
[自然言語処理](https://ja.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E8%A8%80%E8%AA%9E%E5%87%A6%E7%90%86)

 ここまででも、機械学習、自然言語処理という二つの異なる技術が出てきた。AIのタイプは、どれくらいあるのだろうか？
[少なくとも３３ある](http://simplicable.com/new/types-of-artificial-intelligence)

 ただ、これはちょっと細かすぎるし、最近話題のAIと関係がないものも多い。

 現在、話題になっているAIの種類、あるいはAIの技術の種類は、大雑把に言って、
- 自然言語処理
- 機械学習、特にニューラルネットワークによるもの
- 大規模データからの情報抽出
[データマイニング](https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%BC%E3%82%BF%E3%83%9E%E3%82%A4%E3%83%8B%E3%83%B3%E3%82%B0)
[ビッグデータ](https://ja.wikipedia.org/wiki/ビッグデータ)

 先に挙げた、日本で有名な三つのAIの事例は、次のように、これらに対応する。
- 自然言語処理：　IBM Watson, 東ロボ君
- 機械学習：　AlphaGo
- 大規模データからの情報抽出：　IBM　Watson

 この内、自然言語処理は、IBM Watson, 東ロボ君においては、インターフェース、特に入力の部分で重要な技術だが、これが、これらのコアの部分というわけではない。この自然言語処理、特に、発話された言葉や書かれた言葉を認識する技術の進歩は、現在のAIブームの基盤というか、必要な前提、あるいは、縁の下の力持ち、とでもいうべき重要な技術であるが、これは、すでに、当然のもの、McCarthy が言った　As soon as it works, no one calls it AI any more.　の、it works のレベルに近づきつつある。つまり、もう、それは人工知能と呼ばれる域を脱しつつある。だから、特に、それにより人工知能が最近注目されているわけではなく、注目が集まっているのは、実は、２の機械学習、特に、デープラーニングのような、人間の脳神経のシミュレーションから始まったニューラルネットワークと呼ばれる技術の進化と、３の大規模データからの情報抽出であるといえる。
- ちなみに、人工知能の一種ともみなせる自動翻訳は、英語とドイツ語の様な、もともと近い言語の間では、ほぼ実用に近づきつつある。しかし、これは言語処理と呼ばれ、なぜか、あまり、人工知能と呼ばれない。こういうのは、カナ漢字変換が自人工知能とみなされなくなったように、「当たり前のもの」「知能と関係ないもの」、McCarthy がいう、 no one calls it AI any more　の it になりつつある。
[Quantifier elimination](https://en.wikipedia.org/wiki/Quantifier_elimination)

 この講義では、現在、世界的に流行の２と３のタイプのAIを中心に、しかし、「人から仕事を奪う」可能性を持つという点では、まったく変わらない、東ロボ君のようなシステムも含めて考えていくことにする。

 そこで、まず、簡単に、２の機械学習、特にニューラルネットワークによる学習と、３の大規模データからの情報抽出の大雑把な説明をしておく。
## 機械学習

 まず、Wikipediaを見てみる。実は、IT分野の話題では、Wikipedia の情報の信用度は非常に高い。一方で、IT分野の書籍、すくなくとも日本語の書籍のレベルは低いので、たとえば、英語の Wikipedia と、日本語のIT関係本を比較すると、英語の Wikipedia の方が、はるかにレベルが高く信頼性が高いことが多い。これは、英語という巨大なユーザ集団をもつ言語で書かれた Wikipedia の文章が、世界中のIT関係者により「監視」されている一方で、日本語のIT関係本、特に非専門家向けのものが、かならずしもITの専門家ではないライターたちにより書かれる、また、書かれたら容易に直せない、ということを考えれば、当然のこと。
- 実は、IT関係の新聞記事が、ほとんど嘘ばかりというのは、専門家の間では有名なこと。これは日本の記者たちが文系の人で、ITを全く理解できていなかったため。ただし、世代交代が起きたためか、最近は改善されている。
- 新聞に書いてあることだからと信用してはいけない。技術関係のことでいえば、技術者たち、理系の人たちが書いている Wikipedia の信頼性の方がはるかに高い。

 ということで、話を本題にもどして、機械学習の Wikipedia 記事。
[日本語](https://ja.wikipedia.org/wiki/%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92)
[英語](https://en.wikipedia.org/wiki/Machine_learning)

 読んでもピンとこないかもしれないので、実例で説明。
### Googleとキュウリ農家

 これは夏に、Google 日本支社を訪問してGoogle のAIへの取り組みを取材した際に、担当者が特に強調していた事例。

 元技術者のキュウリ農家の小池誠さんが、Google の機械学習用のツールを利用して、キュウリの自動仕分け機械を作ったという話。
[これは、Google の機械学習を広報するサイトで読める。](http://googlecloudplatform-japan.blogspot.jp/2016/08/tensorflow_5.html)

 これの中ほどにある、２LからCまで、さまざまな等級に分けられたキュウリの写真があるが、これが機械学習。

 分類は小池さんのお母さんのスキルで、写真を等級に分けて（それはお母さんが行う）、それを Google の TensorFlow というもので学習させた。

 そうすると、その等級の意味を、TensorFlow　が学習し、自分で、分類ができるようになったということ。

 TensorFlow を新人の手伝いと考えれば、その意味がわかるだろう。

 こういうのが機械学習。
### ここから今回の資料
[機械学習](https://ja.wikipedia.org/wiki/%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92)
[ 英語](https://en.wikipedia.org/wiki/Machine_learning#Approaches)
[日本語](https://ja.wikipedia.org/wiki/%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92#.E6.8A.80.E6.B3.95)

 このキュウリの投球分けに使われていたのがディープラーニングという方法で、機械学習の内、最近もっとも注目されているもの。

 これの仕組みを説明するには数学が必要で難しくなるので、入門である今はさける。（後で、もしかしたらやる。）
[ここ](http://matome.naver.jp/odai/2140635573608360401)

 つまり、キュウリのある等級は、これくらいの大きさで、これくらいの曲がり具合で、…、などといういくつかのキュウリの特徴で決まっているはずなのだが、その特徴を、人間でなくて、機械が勝手に学習してくれるということ。
[上のページ](http://matome.naver.jp/odai/2140635573608360401)
[http://d.hatena.ne.jp/Zellij/20130608/p1](http://d.hatena.ne.jp/Zellij/20130608/p1)

 この「猫の認識」の実験はグーグルでおこなれた実験で、報道ではよく、

 という画像とともに説明されていて、あたかもグーグルのコンピュータが、たくさんの画像を一人で見て、その後、「これが猫です」と言って、この画像をプリントしたかのように説明されることがあるが、そうではなくて、グーグルのコンピュータが無数に作り出した、画像の特徴量（画像判別方法）の一つに、猫の画像に非常によく反応するものがあった、ということ。また、この画像は、その特徴量を一般の人にわかりやすくするために、その特徴量から人間が作り出したもの。

 機械が作り出した一つの特徴量が「猫の画像の特徴量といってよい」という判断や画像の作成は人間がやっていることに注意。
[AlphaGo](https://ja.wikipedia.org/wiki/AlphaGo)
[そののち、自分自身と対戦して強くなった](https://en.wikipedia.org/wiki/AlphaGo)
### ディープラーニングは本当に画期的か？

 現在の報道の多くは、「ディープラーニングというものができて、それを使うとAIが現実になる」というように読める論調のものが多い。

 つまり、ディープラーニングという技術革命が起きて、それにより、ディープラーニング前とディープラーニング後で、世界がガラリと変わりつつある、という風に理解されているのではないかと思える報道が多い。

 実は、ディープラーニングブームが巻き起こる前に、すでに機械学習は、いろいろな場面で実用化されている。

 そして、そういう、さまざまな努力の総体により、AIが大きな社会的影響を引き起こしそうな状況が生まれている。

 だから、あまりに、ディープラーニングにスポットライトをあてると、人工知能の社会影響をかんがえるときには、間違いのもととなる。

 たとえば、次に、ディープラーニングとともに、今日のAIブームの火付け役になったと思われる、IBMの人工知能、アメリカの人気クイズ番組で、歴代チャンピオンに買った Watson の話をするが、Waton は、ディープラーニングと関係がない。

 また、先に説明したように、IBMは、Watson のようなものをAIとさえ呼ばない。
[Jeoperdy!](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%A7%E3%83%91%E3%83%87%E3%82%A3!)
[デープラーニングが評判になり始めたのは2012年](http://business.nikkeibp.co.jp/article/bigdata/20150419/280107/?ST=print)

 そこで、Watsonの話をする前に、どの様な経緯で、現在の様なAIブームが起きたのか、その歴史を簡単に見ておく。
## AIの歴史

 今のAIブームは、三回目のブームだと言われることが多い。最初のブームは、1950年代、AIというものが生まれたとき、第2次ブームは1980年代だということで大抵の見方は一致している。

 このブームというのは、例えば、アメリカ、日本、ヨーロッパなどで、政府や産業が、大量の研究費・開発費をAIに落とした時期のことを言う。そして、ブームとブームの間には、「冬の季節」があり、それは、AIに投入される資金が大幅に減らされた時期を意味する。

 ところが、第二次ブームとは何だったのか、というのは、説明がいろいろある。現在のブームが Watson的なものと、ディープラーニング的なもののごった煮であるように、この時代の主役は一つではなく、次の三つのものの混交だった：
[日本の通産省の新世代コンピュータ（第5世代コンピュータ）プロジェクト](https://ja.wikipedia.org/wiki/第五世代コンピュータ)
[エキスパート・システム](https://ja.wikipedia.org/wiki/エキスパートシステム)
[コネクショニズムの再評価](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%8D%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%8B%E3%82%BA%E3%83%A0)

 ただし、混交とかごった煮というのは、この三つが融合していたというのでなくて、それぞれ、別のもの、ある意味ではライバルとして存在しており、それらの全体で「（第2次）人工知能ブーム」だったという意味。

 そして、これの１，２が、Watson に、３がディープラーニングに対応する。

 そのことを念頭において、いくつかの「歴史」を見てみる。

 日本語
[日本人工知能学会による歴史](https://www.ai-gakkai.or.jp/whatsai/AIhistory.html)
[ITソリューション塾](http://blogs.itmedia.co.jp/itsolutionjuku/2015/07/post_105.html)
[weblio](http://www.weblio.jp/content/人工知能の歴史)
[weblio とは](https://ja.wikipedia.org/wiki/Weblio)
[Wikipedia](https://ja.wikipedia.org/wiki/人工知能の歴史)

 英語
[Wikipedia](https://ja.wikipedia.org/wiki/人工知能の歴史)
[AI Topics](http://aitopics.org/misc/brief-history)
[AAAI ](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E4%BA%BA%E5%B7%A5%E7%9F%A5%E8%83%BD%E5%AD%A6%E4%BC%9A)

 以上の様に、人によりAIの歴史の見方は、異なり、特に、なぜ、第3次AIブームが起きたか、これは本物か、ということの説明は、人により大きく異なる。

 これには
- 人工知能研究とは、人間の知能を人工的に作り出しことである。
- そして、それにより、知能とは何かを知ることである。

 という立場と、
- 人工知能とは、人間の知的労働を肩代わりしたり、補助したりするものである。
- それは機能すればよいのであって、自動車と動物の移動方法が全く違うように、人間の知能とは関係がなくてもよい。

 という立場の様に、AIに対する異なる立場があること。

 それから、人工知能で実現されるものが、大雑把に：
- 人間の論理的・合理的判断能力…考える能力、推論力
- 人間の視覚、聴覚などの感覚による認識能力…直感力

 の二つに分類できることにある。

 ディープラーニングは、主に２であり、Watson は、１である。
- 	ただし、AlphaGo のように、ディープラーニングは１にも応用されるようになってきている。
- しかし、それは性能を上げるために使われており、ディープラーニングの様なものだけで１を行うことは不可能。
- ディープラーニングなどの学習アルゴリズムは、本質的に間違えることがある。その間違いを正していくことが「学習」だからである。
- 一方、１の方は、データの誤解釈などで間違える、データが間違えている、などで、間違うこともあるが、基本的には、「論理」の能力なので「間違えない」のが基本。

 こう考えると
- 第2次AIブームは、主に「人間の論理的・合理的判断能力…考える能力、推論力」を行うAIが脚光を浴び、
- 現代のAIブームは、2016年の今では、あえていえば「人間の視覚、聴覚などの感覚による認識能力…直感力」を行うAIが脚光を浴びている

 といえる。

 しかし、AIが職を奪う、というような問題を考えるとき、より重要なのは、前者である。

 ただし、先に述べたように、それを実現する際に、AlphaGo の様に、ディープラーニングのような「人間の直観力を代替する認識装置」が使われるようになってきている、といえる。

 つまり、人間から職を奪う、特に頭脳労働を行う職、たとえば、弁護士、会計士、医師、教師、ホワイトカラーなどの職を奪う可能性があるのは、AlphaGo 的なもので補強された Watson 風のシステム、だろうと考えられる。

 そこで、その Watson の話。
## IBM Watson

 IBM では、昔からAIの研究が続けられており、大きな成果を上げてきた。
[ガリル・カスパロフ](https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%AB%E3%83%AA%E3%83%BB%E3%82%AB%E3%82%B9%E3%83%91%E3%83%AD%E3%83%95)
[Deep Blue](https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%83%BB%E3%83%96%E3%83%AB%E3%83%BC_(%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF)#.E6.A6.82.E8.A6.81)
[チェス](https://ja.wikipedia.org/wiki/%E3%83%81%E3%82%A7%E3%82%B9)
[[1]](https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%AB%E3%83%AA%E3%83%BB%E3%82%AB%E3%82%B9%E3%83%91%E3%83%AD%E3%83%95#cite_note-kettei-1)
[三浦弘行九段が対局中に将棋ソフトを使用したのではないかと疑われている](http://mainichi.jp/articles/20161026/k00/00m/040/081000c)
[Jeopardy!](https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%A7%E3%83%91%E3%83%87%E3%82%A3!)
[IBM　Watson](https://ja.wikipedia.org/wiki/ワトソン_(コンピュータ))
[https://www.youtube.com/watch?v=pFhSKPOF_lI](https://www.youtube.com/watch?v=pFhSKPOF_lI)
[そして、WatsonのJeorpady!](https://www.youtube.com/watch?v=KVM6KKRa12g)
