Content.makeFrontInterface(800, 225);


const var LOWBOOST = Content.getComponent("LOWOST"
const var EQ = Synth.getEffect("EQ");
const var LOWATTEN = Content.getComponent("LOWATTEN");
const var LOWFREQ = Content.getComponent("LOWFREQ");
const var CBBASS = Content.getComponent("CBBASS");
const var HIGHBOSST = Content.getComponent("HIGHBOSST");
const var HIGHATTEN = Content.getComponent("HIGHATTEN");
const var CBhi = Content.getComponent("CBhi");
const var EQ1 = Synth.getEffect("EQ1");
const var EQ2 = Synth.getEffect("EQ2");

const var ONOFF = Content.getComponent("ONOFF");
const var ONOFF1 = Content.getComponent("ONOFF1");
const var ONOFF2 = Content.getComponent("ONOFF2");
const var ONOFF3 = Content.getComponent("ONOFF3");
const var Button1 = Content.getComponent("Button1");














// bass bosst //
inline function onLOWBOOSTControl(component, value)
{
	local index = EQ.Gain + 0 * EQ.BandOffset;
	EQ.setAttribute(index, value);
};

Content.getComponent("LOWBOOST").setControlCallback(onLOWBOOSTControl);



// bass atten //
inline function onLOWATTENControl(component, value)
{
	local index = EQ.Gain + 1 * EQ.BandOffset;
	EQ.setAttribute(index, -value);
};

Content.getComponent("LOWATTEN").setControlCallback(onLOWATTENControl);

// frequency low //
inline function onCBBASSControl(component, value)
{
	var EQVal = component.getItemText();
	EQ.setAttribute(EQ.Freq, EQVal);
	EQ.setAttribute(EQ.Freq, EQVal);

};

Content.getComponent("CBBASS").setControlCallback(onCBBASSControl);

inline function onLOWFREQControl(component, value)
{
   CBBASS.setValue(value + 1);
   CBBASS.changed();
};

Content.getComponent("LOWFREQ").setControlCallback(onLOWFREQControl);






// hight bosst //
inline function onHIGHBOSSTControl(component, value
{
	local index = EQ1.Gain + 0 * EQ1.BandOffset;
	EQ1.setAttribute(index, value);
};

Content.getComponent("HIGHBOSST").setControlCallback(onHIGHBOSSTControl);


// hight atten //
inline function onHIGHATTENControl(component, value)
{

	local index = EQ2.Gain + 0 * EQ2.BandOffset;Attriuteb
	EQ2.setAttribute(index, -value);
};

Content.getComponent("HIGHATTEN").setControlCallback(onHIGHATTENControl);


// high choice freq //


inline function onCBhiControl(component, value)
{
	var EQ1Val = component.getItemText();
	EQ1.setAttribute(EQ1.Freq, EQ1Val);
	var EQ2Val = component.getItemText();
	EQ2.setAttribute(EQ2.Freq, EQ2Val);
	

};
Content.getComponent("CBhi").setControlCallback(onCBhiControl);


inline function onHIGHFREQControl(component, value)
{
   CBhi.setValue(value + 1);
   CBhi.changed();
};

Content.getComponent("HIGHFREQ").setControlCallback(onHIGHFREQControl);






// bypass //


inline function onONOFFControl(component, value)
{
	ONOFF1.setValue(value);
	ONOFF1.changed();
	ONOFF2.setValue(value);
	ONOFF2.changed();
	ONOFF3.setValue(value);
	ONOFF3.changed();
	Button1.setValue(value);
	Button1.changed();
};

Content.getComponent("ONOFF").setControlCallback(onONOFFControl);

function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 
