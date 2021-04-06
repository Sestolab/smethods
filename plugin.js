CKEDITOR.plugins.add('smethods', {
	init: function(){
		CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype, {
			matchClass: function(regexp){
				return this.hasAttribute('class') && this.getAttribute('class').match(regexp);
			},
			rmClass: function(remove){
				remove = remove instanceof RegExp ? this.matchClass(remove) : remove;
				if (remove)
					for (var c of remove)
						this.removeClass(c);
				return this;
			},
			toggleClass: function(name, remove){
				if (remove && !this.hasClass(name))
					this.rmClass(remove);
				if (name)
					this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
				return this;
			},
			toggleAttribute: function(name, value){
				if (value)
					this.getAttribute(name) == value ? this.removeAttribute(name) : this.setAttribute(name, value);
				else
					this.hasAttribute(name) ? this.removeAttribute(name) : this.setAttribute(name, '');
				return this;
			},
			matchAttribute: function(regexp){
				return CKEDITOR.tools.objectKeys(this.getAttributes()).join().match(regexp);
			},
			realName: function(){
				return this.data('cke-real-element-type') || this.getName();
			},
			isReal: function(){
				for (var name of arguments)
					if (name == this.realName())
						return true;
				return false;
			},
			findParent: function(selector){
				return this.getParents(true).find(function(node){
					if (node.$.matches(selector))
						return node;
				});
			}
		});

		CKEDITOR.plugins.widget && CKEDITOR.tools.extend(CKEDITOR.plugins.widget.prototype, {
			rmData: function(key, value){
				if (this.data[key])
					if (value === true)
						this.setData(key, '');
					else if (value instanceof RegExp)
						this.setData(key, this.data[key].replace(value, ''));
				return this;
			},
			pushData: function(key, value, remove){
				if (remove)
					this.rmData(key, remove);
				if (value)
					if (typeof value == 'string')
						this.setData(key, this.data[key] ? this.data[key].concat(' ', value) : value);
					else
						this.setData(key, this.data[key] ? this.data[key].concat(value) : value);
				return this;
			}
		});

		CKEDITOR.tools.extend(CKEDITOR.dialog.prototype, {
			getCurrentPageId: function(){
				return this._.currentTabId;
			}
		});

		CKEDITOR.tools.extend(CKEDITOR.ui.dialog.uiElement.prototype, {
			getValues: function(){
				var values = [];
				if (this.items)
					for (var value of this.items){
						value = value[1] ? value[1] : CKEDITOR.tools.isArray(value[0]) ? value[0][0] : value[0];
						if (value)
							values.push(value);
					}
				return values;
			},
			hasFocus: function(){
				return this.getDialog()._.currentFocusIndex == this.focusIndex;
			},
			toggleState: function(){
				this.isEnabled() ? this.disable() : this.enable();
			},
			isOnCurrentPage: function(){
				var dialog = this.getDialog();
				return !!dialog.getContentElement(dialog.getCurrentPageId(), this.id);
			}
		});

		CKEDITOR.tools.extend(CKEDITOR.tools.array, {
			without: function(array, ...values){
				return CKEDITOR.tools.array.filter(array, function(value){
					return !CKEDITOR.tools.search(values, value) && value;
				});
			}
		});
	}
});


CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
	addCommands: function(definitions){
		for (var commandName in definitions)
			this.addCommand(commandName, definitions[commandName]);
	}
});

CKEDITOR.tools.extend(CKEDITOR.ui.prototype, {
	addMenuButton: function(name, definition){
		this.add(name, CKEDITOR.UI_MENUBUTTON, definition);
	},
	addButtons: function(definition){
		for (var buttonName in definitions)
			this.addMenuButton(buttonName, definitions[buttonName]);
	}
});

