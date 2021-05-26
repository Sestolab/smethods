CKEDITOR.plugins.add('smethods', {
	init: function(){
		CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype, {
			matchClass: function(regexp){
				return this.hasAttribute('class') && this.getAttribute('class').match(regexp);
			},
			rmClass: function(remove){
				remove = remove instanceof RegExp ? this.matchClass(remove) : remove;
				if (remove)
					for (var i in remove)
						this.removeClass(remove[i]);

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
				for (var i in arguments)
					if (arguments[i] == this.realName())
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

		CKEDITOR.tools.extend(CKEDITOR.dialog.prototype, {
			getCurrentPageId: function(){
				return this._.currentTabId;
			}
		});

		CKEDITOR.tools.extend(CKEDITOR.ui.dialog.uiElement.prototype, {
			getValues: function(){
				var values = [];
				if (this.items)
					for (var i in this.items){
						var value = this.items[i];

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
	}
});

