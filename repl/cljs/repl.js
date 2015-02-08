// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17783_17787 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17784_17788 = null;
var count__17785_17789 = (0);
var i__17786_17790 = (0);
while(true){
if((i__17786_17790 < count__17785_17789)){
var f_17791 = cljs.core._nth.call(null,chunk__17784_17788,i__17786_17790);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_17791);

var G__17792 = seq__17783_17787;
var G__17793 = chunk__17784_17788;
var G__17794 = count__17785_17789;
var G__17795 = (i__17786_17790 + (1));
seq__17783_17787 = G__17792;
chunk__17784_17788 = G__17793;
count__17785_17789 = G__17794;
i__17786_17790 = G__17795;
continue;
} else {
var temp__4126__auto___17796 = cljs.core.seq.call(null,seq__17783_17787);
if(temp__4126__auto___17796){
var seq__17783_17797__$1 = temp__4126__auto___17796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17783_17797__$1)){
var c__4716__auto___17798 = cljs.core.chunk_first.call(null,seq__17783_17797__$1);
var G__17799 = cljs.core.chunk_rest.call(null,seq__17783_17797__$1);
var G__17800 = c__4716__auto___17798;
var G__17801 = cljs.core.count.call(null,c__4716__auto___17798);
var G__17802 = (0);
seq__17783_17787 = G__17799;
chunk__17784_17788 = G__17800;
count__17785_17789 = G__17801;
i__17786_17790 = G__17802;
continue;
} else {
var f_17803 = cljs.core.first.call(null,seq__17783_17797__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_17803);

var G__17804 = cljs.core.next.call(null,seq__17783_17797__$1);
var G__17805 = null;
var G__17806 = (0);
var G__17807 = (0);
seq__17783_17787 = G__17804;
chunk__17784_17788 = G__17805;
count__17785_17789 = G__17806;
i__17786_17790 = G__17807;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});
