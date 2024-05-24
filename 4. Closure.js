//Lifetime of a variable in function
function sayHello() {
    let name = "Faysal";
    console.log("Hello " + name);
}
sayHello();

/** javaScript একটি asynchronus ফাংশন অর্থাৎ লাইন বাই লাইন কোড এক্সিকিউট করে।
 * এখানে প্রথমে sayHello ফাংশন ডিক্লারেশন এ আসে যখন দেখবে ফাংশন call হয়নি তখন এই scope skip করে next এ চলে যাবে।
 * এখন  এখানে sayHello ফাংশন call করা হয়েছে so সে তার এক্সেকিউশন শুরু করে দিবে এবং তার জন্য একটা মেমোরি allocate হয়ে যাবে।
 * তারপর এখানে name ভ্যারিয়েবল থাকায় তা মেমোরিতে স্টোর করে ফেলবে।
 * তারপর console.log("Hello "+ name); এর জন্য memory থেকে name নিয়ে আসে এটা রিটার্ন করে ফাংশনের এক্সেকিউশন শেষ করে দিবে।
 * যেহেতু ফাংশনের এক্সেকিউশন শেষ তাই memory অফ sayHello destroy হয়ে যাবে, সাথে  মেমোরিতে যে  name ভ্যারিয়েবল ছিলো তা ডিস্ট্রয় হয়ে গেছে
 * অর্থাৎ ফাংশন এক্সেকিউশন পর name ভ্যারিয়েবলের lifeTime শেষ হয়ে যাবে।
 */

//understanding Scope
function sayHello2() {
    let name = "Faysal";

    function innerFunction() {
        console.log("Hello " + name);
    }
    return innerFunction;
}
const xyz = sayHello2(); //sayHello2 function returns innerFunction, so xyz will store innerFunction here
xyz();

/**
 *এখানে প্রথমে sayHello2 ফাংশন ডিক্লারেশন এ আসে যখন দেখবে ফাংশন call হয়নি তখন এই scope skip করে next const xyz = sayHello(); এই লাইন এ চলে যাবে। 
 এখানে sayHello2 ফাংশন call করা হয়েছে so সে তার এক্সেকিউশন শুরু করে দিবে এবং তার জন্য একটা মেমোরি allocate হয়ে যাবে। 
 তারপর এখানে name ভ্যারিয়েবল থাকায় তা মেমোরিতে স্টোর করে ফেলবে। 
 এবং পরবর্তীতে যখন innerFunction এর দিকে আসছে তখন innerFunction কল করা হয়নি বলে তার জন্য কোনো memory allocate হবে না। 
 তারপর তা innerFunction রিটার্ন করে দিবে এবং sayHello2 এর এক্সেকিউশন শেষ। 
 যেহেতু ফাংশনের এক্সেকিউশন শেষ তাই মেমোরি অফ sayHello2 destroy হয়ে যাবে, তাই  মেমোরিতে যে  name ভ্যারিয়েবল ছিলো তা ডিস্ট্রয় হয়ে গেছে। 
 এখন নেক্সট লাইন এ গেলে এল, যেহেতু sayHello2 ফাংশন innerFunction রিটার্ন করেছে তাই xyz এ এখন ইনার ফাংশন টা আছে 
 তো এখন যখন আমি xyz কল করবো তখন innerFunction কল হচ্ছে so সে তার এক্সেকিউশন শুরু করে দিবে এবং তার জন্য একটা মেমোরি allocate হয়ে যাবে। 
 তারপর আমরা যখন console.log("Hello "+ name); এ যাবো তখন তা মেমোরিতে কোনো name ভ্যারিয়েবল পাবে না তখন সে outer scope অর্থাৎ sayHello2 তে যাবে কিন্তু তা already execute হয়ে destroy হয়ে যাওয়ায় কোনো মেমোরি পাবে না। 
 এখন name কিভাবে পাবে এই সমস্যার সমাধান করে দেয় ক্লোজার।
 */

/*ক্লোজার ভ্যারিয়েবলের সাথে মেমোরি তে ১তা রেফারেন্স রেখে দেয়। 
 এক্সিকিউশন পর যখন ওই ভ্যারিয়েবল destroy হয়ে যায় তখন তার রেফারেন্স memory তে থেকে যায়। 
 ফলে পরে প্রয়োজন হলে ওই রেফারেন্স ইউজ করে ভ্যারিয়েবলটি এক্সেস করা যায়*/
